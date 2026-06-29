(function () {
    const CSV_PATH = 'statistics_test/method_status_summary.csv';
    const CHART_ID = 'methodErrorRateChart';
    let methodRows = [];

    function escapeHtml(value) {
        if (window.SensorDashboard && typeof window.SensorDashboard.escapeHtml === 'function') {
            return window.SensorDashboard.escapeHtml(value);
        }
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function parseCsv(text) {
        const rows = [];
        let field = '';
        let row = [];
        let inQuotes = false;

        for (let i = 0; i < text.length; i += 1) {
            const char = text[i];
            const next = text[i + 1];
            if (char === '"') {
                if (inQuotes && next === '"') {
                    field += '"';
                    i += 1;
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                row.push(field);
                field = '';
            } else if ((char === '\n' || char === '\r') && !inQuotes) {
                if (char === '\r' && next === '\n') i += 1;
                row.push(field);
                if (row.some(cell => cell.trim() !== '')) rows.push(row);
                row = [];
                field = '';
            } else {
                field += char;
            }
        }

        if (field || row.length) {
            row.push(field);
            rows.push(row);
        }

        const headers = rows.shift() || [];
        return rows.map(values => headers.reduce((record, header, index) => {
            record[header.trim()] = (values[index] || '').trim();
            return record;
        }, {}));
    }

    function toNumber(value) {
        const numeric = Number(value);
        return Number.isFinite(numeric) ? numeric : 0;
    }

    function normalizeRow(row) {
        return {
            sender: row.sender,
            pid: row.pid,
            unit: row.unit || '-',
            process: row.process || '-',
            destination: row.destination,
            destinationPid: row.destination_pid,
            destinationUnit: row.destination_unit || '-',
            destinationProcess: row.destination_process || '-',
            member: row.member || '-',
            error: toNumber(row.error),
            success: toNumber(row.success),
            total: toNumber(row.total),
            errorRate: toNumber(row.error_rate)
        };
    }

    function formatNumber(value) {
        return new Intl.NumberFormat('en-US').format(value);
    }

    function formatRate(value) {
        return `${(value * 100).toFixed(2)}%`;
    }

    function statusFor(rate) {
        if (rate >= 0.8) return { key: 'critical', label: 'Critical' };
        if (rate >= 0.3) return { key: 'warning', label: 'Warning' };
        return { key: 'normal', label: 'Normal' };
    }

    function isFullFailure(rate) {
        return Math.abs(rate - 1) < 0.0000001;
    }

    function getSummary(rows) {
        const totalCalls = rows.reduce((sum, row) => sum + row.total, 0);
        const totalSuccess = rows.reduce((sum, row) => sum + row.success, 0);
        const totalError = rows.reduce((sum, row) => sum + row.error, 0);
        const highest = rows.slice().sort((a, b) => {
            if (b.errorRate !== a.errorRate) return b.errorRate - a.errorRate;
            return b.error - a.error;
        })[0];

        return {
            totalCalls,
            totalSuccess,
            totalError,
            overallErrorRate: totalCalls ? totalError / totalCalls : 0,
            highest
        };
    }

    function renderOverview(summary) {
        const highestLabel = summary.highest
            ? `${summary.highest.member} (${formatRate(summary.highest.errorRate)})`
            : '-';

        return `
            <div class="method-overview-grid">
                <div class="method-overview-card">
                    <div class="method-overview-label">Total Method Calls</div>
                    <div class="method-overview-value">${escapeHtml(formatNumber(summary.totalCalls))}</div>
                </div>
                <div class="method-overview-card">
                    <div class="method-overview-label">Total Success</div>
                    <div class="method-overview-value">${escapeHtml(formatNumber(summary.totalSuccess))}</div>
                </div>
                <div class="method-overview-card">
                    <div class="method-overview-label">Total Error</div>
                    <div class="method-overview-value">${escapeHtml(formatNumber(summary.totalError))}</div>
                </div>
                <div class="method-overview-card">
                    <div class="method-overview-label">Overall Error Rate</div>
                    <div class="method-overview-value">${escapeHtml(formatRate(summary.overallErrorRate))}</div>
                </div>
                <div class="method-overview-card">
                    <div class="method-overview-label">Highest Error Method</div>
                    <div class="method-overview-value compact">${escapeHtml(highestLabel)}</div>
                </div>
            </div>
        `;
    }

    function renderTable(rows) {
        const sortedRows = rows.slice().sort((a, b) => {
            if (b.errorRate !== a.errorRate) return b.errorRate - a.errorRate;
            return b.total - a.total;
        });

        const body = sortedRows.map(row => {
            const status = statusFor(row.errorRate);
            return `
                <tr>
                    <td>${escapeHtml(row.unit)}</td>
                    <td>${escapeHtml(row.process)}</td>
                    <td>${escapeHtml(row.destinationUnit)}</td>
                    <td>${escapeHtml(row.destinationProcess)}</td>
                    <td>${escapeHtml(row.member)}</td>
                    <td class="number-cell">${escapeHtml(formatNumber(row.success))}</td>
                    <td class="number-cell">${escapeHtml(formatNumber(row.error))}</td>
                    <td class="number-cell">${escapeHtml(formatNumber(row.total))}</td>
                    <td>
                        <div class="method-rate-cell">
                            <strong>${escapeHtml(formatRate(row.errorRate))}</strong>
                            <span class="method-status-badge ${status.key}">${escapeHtml(status.label)}</span>
                            ${isFullFailure(row.errorRate) ? '<span class="method-failure-note">Critical Method Failure</span>' : ''}
                        </div>
                    </td>
                </tr>
            `;
        }).join('');

        return `
            <section class="method-section">
                <div class="method-section-header">
                    <h3>Method Status Table</h3>
                    <div class="method-section-note">Rows are sorted by error rate, then total calls.</div>
                </div>
                <div class="method-table-wrap">
                    <table class="method-status-table">
                        <thead>
                            <tr>
                                <th>Source Unit</th>
                                <th>Source Process</th>
                                <th>Destination Unit</th>
                                <th>Destination Process</th>
                                <th>Method Member</th>
                                <th>Success</th>
                                <th>Error</th>
                                <th>Total</th>
                                <th>Error Rate</th>
                            </tr>
                        </thead>
                        <tbody>${body}</tbody>
                    </table>
                </div>
            </section>
        `;
    }

    function renderChartSection() {
        return `
            <section class="method-section">
                <div class="method-section-header">
                    <h3>Error Rate Ranking Chart</h3>
                    <div class="method-section-note">X-axis: Method Member &middot; Y-axis: Error Rate</div>
                </div>
                <div class="method-chart-wrap">
                    <canvas id="${CHART_ID}" class="method-bar-chart" height="420" aria-label="Error Rate Ranking Chart"></canvas>
                </div>
                <p class="method-axis-note">X-axis: Method Member. Y-axis: Error Rate.</p>
            </section>
        `;
    }

    function renderRelationships(rows) {
        const sortedRows = rows.slice().sort((a, b) => {
            if (b.errorRate !== a.errorRate) return b.errorRate - a.errorRate;
            return b.total - a.total;
        });

        const items = sortedRows.map(row => {
            const status = statusFor(row.errorRate);
            const label = isFullFailure(row.errorRate) ? 'Critical Method Failure' : status.label;
            return `
                <div class="relationship-item">
                    <div class="relationship-node">${escapeHtml(row.process)}</div>
                    <div class="relationship-arrow">&rarr;</div>
                    <div class="relationship-node">${escapeHtml(row.destinationProcess)}</div>
                    <div class="relationship-arrow">&rarr;</div>
                    <div class="relationship-node">${escapeHtml(row.member)}</div>
                    <span class="method-status-badge ${status.key}">${escapeHtml(label)}</span>
                </div>
            `;
        }).join('');

        return `
            <section class="method-section">
                <div class="method-section-header">
                    <h3>Service Call Relationship</h3>
                    <div class="method-section-note">source process &rarr; destination process &rarr; method member &rarr; status</div>
                </div>
                <div class="relationship-list">${items}</div>
            </section>
        `;
    }

    function renderDashboard(rows) {
        return renderTable(rows);
    }

    function drawRankingChart(rows) {
        const canvas = document.getElementById(CHART_ID);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        const cssHeight = 420;
        canvas.width = Math.max(900, rect.width * ratio);
        canvas.height = cssHeight * ratio;
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

        const width = canvas.width / ratio;
        const height = canvas.height / ratio;
        const padding = { top: 24, right: 20, bottom: 100, left: 64 };
        const chartRows = rows.slice()
            .sort((a, b) => {
                if (b.errorRate !== a.errorRate) return b.errorRate - a.errorRate;
                return b.total - a.total;
            })
            .slice(0, 18);

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);

        const plotWidth = width - padding.left - padding.right;
        const plotHeight = height - padding.top - padding.bottom;
        const barGap = 8;
        const barWidth = Math.max(12, (plotWidth / Math.max(chartRows.length, 1)) - barGap);
        const yFor = rate => padding.top + (1 - Math.min(rate, 1)) * plotHeight;

        ctx.strokeStyle = '#e5e7eb';
        ctx.fillStyle = '#64748b';
        ctx.font = '12px Segoe UI, sans-serif';
        for (let i = 0; i <= 4; i += 1) {
            const rate = i / 4;
            const y = yFor(rate);
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(width - padding.right, y);
            ctx.stroke();
            ctx.fillText(`${Math.round(rate * 100)}%`, 16, y + 4);
        }

        chartRows.forEach((row, index) => {
            const status = statusFor(row.errorRate);
            const x = padding.left + index * (plotWidth / Math.max(chartRows.length, 1)) + barGap / 2;
            const y = yFor(row.errorRate);
            const h = padding.top + plotHeight - y;
            const color = status.key === 'critical' ? '#dc2626' : status.key === 'warning' ? '#f59e0b' : '#16a34a';
            ctx.fillStyle = color;
            ctx.fillRect(x, y, barWidth, h);
            ctx.fillStyle = '#334155';
            ctx.save();
            ctx.translate(x + barWidth / 2, height - padding.bottom + 10);
            ctx.rotate(-Math.PI / 4);
            ctx.fillText(row.member, 0, 0);
            ctx.restore();
        });

        ctx.fillStyle = '#334155';
        ctx.font = '13px Segoe UI, sans-serif';
        ctx.fillText('Error Rate', 12, 18);
        ctx.fillText('Method Member', width / 2 - 48, height - 14);
    }

    async function loadAndRender() {
        const mount = document.getElementById('methodStatusMount');
        if (!mount) return;

        try {
            const response = await fetch(CSV_PATH);
            if (!response.ok) throw new Error(`Cannot load ${CSV_PATH}: ${response.status}`);
            methodRows = parseCsv(await response.text()).map(normalizeRow);
            mount.innerHTML = renderDashboard(methodRows);
            requestAnimationFrame(() => drawRankingChart(methodRows));
        } catch (error) {
            mount.innerHTML = `<div class="method-error">Method Call Status load failed: ${escapeHtml(error.message)}</div>`;
            console.error(error);
        }
    }

    window.sensorModules = window.sensorModules || {};
    window.sensorModules.MethodStatus = {
        init: function () {},
        renderSensors: function (sensors, helpers) {
            return helpers.html;
        },
        afterRender: loadAndRender,
        redraw: function () {
            drawRankingChart(methodRows);
        }
    };
}());
