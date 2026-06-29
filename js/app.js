const DASHBOARD_CATEGORIES = ['Temperature', 'Airflow', 'Power', 'Voltage'];

const sensorFiles = [
    { category: 'airflow', sensorName: 'SYSTEM_AIRFLOW_CFM', path: 'statistics_test/airflow/anomaly_airflow-SYSTEM_AIRFLOW_CFM.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN0_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN0_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN1_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN1_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN4_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN4_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN5_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN5_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN8_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN8_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN9_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN9_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD1_FAN11_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD1_FAN11_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD1_FAN2_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD1_FAN2_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD1_FAN3_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD1_FAN3_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD1_FAN6_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD1_FAN6_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD1_FAN7_48V_PWR_W', path: 'statistics_test/power/anomaly_power-VIRTUAL_FANBOARD1_FAN7_48V_PWR_W.csv' },
    { category: 'temperature', sensorName: 'MGNT_TEMP_C', path: 'statistics_test/temperature/anomaly_temperature-MGNT_TEMP_C.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_48V_AUX_VOLT_V', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_48V_AUX_VOLT_V.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN0_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN0_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN1_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN1_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN4_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN4_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN5_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN5_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN8_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN8_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN9_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN9_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_48V_AUX_VOLT_V', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_48V_AUX_VOLT_V.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_FAN11_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_FAN11_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_FAN2_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_FAN2_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_FAN3_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_FAN3_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_FAN6_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_FAN6_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_FAN7_48V_CURR_A', path: 'statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_FAN7_48V_CURR_A.csv' }
];

const modulePaths = {
    Airflow: 'modules/airflow/airflow.html',
    Temperature: 'modules/temperature/temperature.html',
    Power: 'modules/power/power.html',
    Voltage: 'modules/voltage/voltage.html',
    MethodStatus: 'modules/method-status/method-status.html'
};

const sensorSeriesByCategory = { Temperature: [], Airflow: [], Power: [], Voltage: [] };
const moduleCache = {};
const sensorModules = window.sensorModules || {};
const chartInstances = new Map();
let chartRenderToken = 0;
let sensorsData = { Temperature: [], Airflow: [], Power: [], Voltage: [] };
let activeCategory = null;
let dataLoaded = false;

const els = {
    homeView: document.getElementById('homeView'),
    categoryView: document.getElementById('categoryView'),
    temperatureBaselineView: document.getElementById('temperatureBaselineView'),
    categoryTitle: document.getElementById('categoryTitle'),
    sensorList: document.getElementById('sensorList'),
    backBtn: document.getElementById('backBtn'),
    categoryBtns: document.querySelectorAll('.category-btn'),
    totalSensors: document.getElementById('totalSensors'),
    activeSensors: document.getElementById('activeSensors'),
    lastUpdate: document.getElementById('lastUpdate')
};

function normalizeCategory(category) {
    const value = String(category || '').trim().toLowerCase();
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function normalizeLevel(level) {
    return String(level || 'normal').trim().toLowerCase();
}

function displayLevel(level) {
    const normalized = normalizeLevel(level);
    if (normalized === 'low') return 'LOW';
    if (normalized === 'high') return 'HIGH';
    return 'NORMAL';
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function timestampToMilliseconds(timestamp) {
    const numeric = Number(timestamp);
    if (!Number.isFinite(numeric)) return NaN;
    return numeric > 1_000_000_000_000 ? numeric / 1000 : numeric;
}

function timestampToLabel(timestampMs) {
    const numeric = Number(timestampMs);
    if (!Number.isFinite(numeric)) return '-';
    const date = new Date(numeric);
    if (Number.isNaN(date.getTime())) return String(timestampMs);
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Taipei',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).formatToParts(date).reduce((acc, part) => {
        acc[part.type] = part.value;
        return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
}

function registerSensorModule(name, module) {
    sensorModules[name] = module;
    window.sensorModules = sensorModules;
}

async function loadModuleHtml(category) {
    if (!moduleCache[category]) {
        const response = await fetch(modulePaths[category]);
        if (!response.ok) throw new Error(`Cannot load ${category} module HTML: ${response.status}`);
        moduleCache[category] = await response.text();
    }
    return moduleCache[category];
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
            if (row.some(cell => cell !== '')) rows.push(row);
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
        record[header] = values[index] || '';
        return record;
    }, {}));
}

function toPoint(record, file) {
    const anomalyLevel = displayLevel(record.anomaly_level);
    const rawTimestamp = record.timestamp || record.timestamp_realtime || record['timestamp-realtime'];
    const timestampMs = timestampToMilliseconds(rawTimestamp);
    const level = normalizeLevel(anomalyLevel);
    return {
        category: normalizeCategory(record.sensor_type || file.category),
        sensorName: record.sensor_name || file.sensorName,
        timestampMs,
        rawTimestamp,
        value: Number(record.value),
        lowerBound: Number(record.iqr_lower_bound),
        upperBound: Number(record.iqr_upper_bound),
        pid: record.pid || '-',
        tableUnit: record.unit || '-',
        anomalyLevel,
        isAnomaly: level !== 'normal'
    };
}

async function loadSensorSeries() {
    await Promise.all(sensorFiles.map(async file => {
        const category = normalizeCategory(file.category);
        const response = await fetch(file.path);
        if (!response.ok) throw new Error(`Cannot load ${file.path}: ${response.status}`);
        const records = parseCsv(await response.text())
            .map(record => toPoint(record, file))
            .filter(point => Number.isFinite(point.timestampMs) && Number.isFinite(point.value))
            .sort((a, b) => a.timestampMs - b.timestampMs);

        if (records.length) {
            records.forEach((record, index) => {
                record.seriesIndex = index;
            });
            sensorSeriesByCategory[category].push({
                category,
                sensorName: file.sensorName,
                path: file.path,
                records,
                currentIndex: records.length - 1,
                mode: 'static',
                viewSize: records.length,
                zoomRange: null,
                isPlaying: false,
                timer: null
            });
        }
    }));

    dataLoaded = true;
    syncDisplay();
}

function inferUnit(sensorName, category) {
    if (sensorName.endsWith('_V') || category === 'Voltage') return 'V';
    if (sensorName.endsWith('_A')) return 'A';
    if (sensorName.endsWith('_W') || category === 'Power') return 'W';
    if (sensorName.includes('TEMP')) return 'C';
    if (sensorName.includes('AIRFLOW')) return 'CFM';
    return '';
}

function currentPointForSeries(series) {
    return series.records[series.currentIndex] || series.records[0];
}

function indexAtOrBefore(records, timestampMs) {
    let low = 0;
    let high = records.length - 1;
    let result = 0;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (records[mid].timestampMs <= timestampMs) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}

function buildSensorsData() {
    const output = { Temperature: [], Airflow: [], Power: [], Voltage: [] };
    DASHBOARD_CATEGORIES.forEach(category => {
        output[category] = sensorSeriesByCategory[category].map(series => {
            const current = currentPointForSeries(series);
            return {
                id: series.sensorName,
                name: series.sensorName,
                sensorName: series.sensorName,
                valueUnit: inferUnit(series.sensorName, category),
                tableUnit: current.tableUnit,
                pid: current.pid,
                value: Number(current.value.toFixed(3)),
                lowerBound: current.lowerBound,
                upperBound: current.upperBound,
                anomalyLevel: current.anomalyLevel,
                status: current.isAnomaly ? 'warning' : 'normal',
                taipeiTime: `Time: ${timestampToLabel(current.timestampMs)}`,
                category
            };
        });
    });
    return output;
}

function syncDisplay() {
    sensorsData = buildSensorsData();
    updateStatistics();
    if (activeCategory) renderActiveCategory();
}

function findSeries(category, sensorName) {
    return (sensorSeriesByCategory[category] || []).find(series => series.sensorName === sensorName);
}

function setSeriesMode(series, mode) {
    pauseSeries(series);
    series.mode = mode;
    if (mode === 'static') {
        series.currentIndex = series.records.length - 1;
    }
    refreshAfterSeriesChange();
}

function playSeries(series) {
    if (!series || !series.records.length) return;
    series.mode = 'replay';
    series.isPlaying = true;
    scheduleSeriesTick(series);
    refreshAfterSeriesChange();
}

function pauseSeries(series) {
    if (!series) return;
    series.isPlaying = false;
    clearTimeout(series.timer);
    series.timer = null;
}

function resetSeries(series, autoplay = false) {
    if (!series) return;
    pauseSeries(series);
    series.mode = 'replay';
    series.currentIndex = 0;
    if (autoplay) {
        playSeries(series);
    } else {
        refreshAfterSeriesChange();
    }
}

function scheduleSeriesTick(series) {
    clearTimeout(series.timer);
    if (!series.isPlaying || series.mode !== 'replay' || !series.records.length) return;
    const current = series.records[series.currentIndex];
    const nextIndex = (series.currentIndex + 1) % series.records.length;
    const next = series.records[nextIndex];
    const firstStep = series.records.length > 1 ? series.records[1].timestampMs - series.records[0].timestampMs : 300;
    const delayMs = nextIndex === 0
        ? Math.max(1, firstStep)
        : Math.max(1, next.timestampMs - current.timestampMs);

    series.timer = setTimeout(() => {
        series.currentIndex = nextIndex;
        refreshSeriesDisplay(series);
        scheduleSeriesTick(series);
    }, delayMs);
}

function setSeriesTimeline(series, index) {
    pauseSeries(series);
    series.currentIndex = Math.max(0, Math.min(series.records.length - 1, Number(index)));
    refreshAfterSeriesChange();
}

function setSeriesZoom(series, value) {
    series.viewSize = Math.max(5, Math.min(series.records.length, Number(value)));
    refreshAfterSeriesChange();
}

function resetSeriesZoom(series) {
    if (!series) return;
    series.zoomRange = null;
    const instance = chartInstances.get(chartIdFor(series.category, series.sensorName));
    if (instance && typeof instance.resetZoom === 'function') {
        instance.resetZoom();
    }
    refreshAfterSeriesChange();
}

function refreshAfterSeriesChange() {
    sensorsData = buildSensorsData();
    updateStatistics();
    if (activeCategory) renderActiveCategory();
}

function refreshSeriesDisplay(series) {
    sensorsData = buildSensorsData();
    updateStatistics();
    updateSensorPanel(series);
    updateChartForSeries(series);
}

function createSensorCard(sensor, categoryClass) {
    const level = normalizeLevel(sensor.anomalyLevel);
    return `
        <div class="sensor-card ${categoryClass}-item anomaly-${level}" data-sensor-card="${escapeHtml(sensor.sensorName)}">
            <div class="sensor-name">
                <span class="sensor-status ${level}"></span>
                ${escapeHtml(sensor.sensorName)}
            </div>
            <div class="sensor-details">
                <div class="sensor-detail"><span class="detail-label">Sensor Name</span><span class="detail-value sensor-name-value">${escapeHtml(sensor.sensorName)}</span></div>
                <div class="sensor-detail"><span class="detail-label">Current Value</span><span class="detail-value ${level}" data-current-value>${escapeHtml(sensor.value)} ${escapeHtml(sensor.valueUnit)}</span></div>
                <div class="sensor-detail"><span class="detail-label">anomaly_level</span><span class="anomaly-pill ${level}" data-anomaly-level>${escapeHtml(sensor.anomalyLevel)}</span></div>
                <div class="sensor-detail"><span class="detail-label">Unit</span><span class="detail-value compact">${escapeHtml(sensor.tableUnit || '-')}</span></div>
                <div class="sensor-detail"><span class="detail-label">PID</span><span class="detail-value compact">${escapeHtml(sensor.pid || '-')}</span></div>
                <div class="sensor-detail"><span class="detail-label">Event Time</span><span class="detail-value compact" data-event-time>${escapeHtml(sensor.taipeiTime)}</span></div>
            </div>
        </div>
    `;
}

function chartIdFor(category, sensorName) {
    return `chart-${category}-${sensorName}`.replace(/[^a-z0-9_-]/gi, '-');
}

function renderSensorChartCard(category, series) {
    const current = currentPointForSeries(series);
    const level = normalizeLevel(current.anomalyLevel);
    const title = `${category} - ${series.sensorName}`;
    const modeLabel = series.mode === 'static' ? 'Static Analysis' : 'Replay Mode';
    const chartHeight = chartHeightForSeries(series);
    return `
        <article class="chart-card chart-mode-${escapeHtml(series.mode)}">
            <div class="chart-card-header">
                <h3>${escapeHtml(title)}</h3>
                <span class="anomaly-pill ${escapeHtml(level)}">${escapeHtml(current.anomalyLevel)}</span>
            </div>
            <div class="chart-control-panel" data-category="${escapeHtml(category)}" data-sensor-name="${escapeHtml(series.sensorName)}">
                <div class="segmented-control chart-mode-control">
                    <button type="button" class="mode-btn ${series.mode === 'static' ? 'active' : ''}" data-action="mode" data-mode="static">Static Analysis</button>
                    <button type="button" class="mode-btn ${series.mode === 'replay' ? 'active' : ''}" data-action="mode" data-mode="replay">Replay Mode</button>
                </div>
                <div class="replay-controls">
                    <button type="button" class="control-btn" data-action="play">Play</button>
                    <button type="button" class="control-btn" data-action="pause">Pause</button>
                    <button type="button" class="control-btn" data-action="reset">Reset</button>
                    <button type="button" class="control-btn secondary" data-action="reset-zoom">Reset Zoom</button>
                </div>
                <div class="chart-slider-group">
                    <label>Timeline</label>
                    <input type="range" class="timeline-slider" data-action="timeline" min="0" max="${series.records.length - 1}" value="${series.currentIndex}">
                    <span>${escapeHtml(timestampToLabel(current.timestampMs))}</span>
                </div>
                <div class="chart-mode-state">${escapeHtml(modeLabel)}${series.isPlaying ? ' - Playing' : ''}</div>
                <p class="chart-usage-hint">Use mouse wheel to zoom, drag to pan, and hover to inspect values.</p>
            </div>
            <div class="chart-container" data-chart-container style="height: ${chartHeight}px;">
                <canvas id="${escapeHtml(chartIdFor(category, series.sensorName))}" class="sensor-chart" height="${chartHeight}" aria-label="${escapeHtml(title)} line chart"></canvas>
                <div class="chart-error-message" data-chart-error hidden>Unable to load chart.</div>
            </div>
            <div class="axis-label x-axis-label">X-axis: Time (timestamp)</div>
            <div class="axis-label y-axis-label">Y-axis: Sensor Value</div>
            <p class="chart-axis-note">X-axis represents sensor event time. Y-axis represents sensor reading value.</p>
            <div class="chart-legend">
                <span><i class="legend-line value-line"></i>Sensor Value</span>
                <span><i class="legend-line lower-line"></i>Lower Bound</span>
                <span><i class="legend-line upper-line"></i>Upper Bound</span>
                <span><i class="legend-dot low-dot"></i>LOW / HIGH</span>
                <span><i class="legend-marker"></i>Replay position</span>
            </div>
        </article>
    `;
}

function chartHeightForSeries(series) {
    return series.mode === 'replay' ? 350 : 400;
}

function renderSensorPanels(category, sensors) {
    const seriesList = sensorSeriesByCategory[category] || [];
    if (!sensors.length) return renderEmptyState();
    return sensors.map(sensor => {
        const series = seriesList.find(item => item.sensorName === sensor.sensorName);
        return `
            <section class="sensor-panel" data-category="${escapeHtml(category)}" data-sensor-name="${escapeHtml(sensor.sensorName)}">
                ${createSensorCard(sensor, category.toLowerCase())}
                ${series ? renderSensorChartCard(category, series) : ''}
            </section>
        `;
    }).join('');
}

function renderEmptyState() {
    return '<div class="empty-state"><div class="empty-state-text">No sensor data loaded.</div></div>';
}

async function showCategoryView(category) {
    activeCategory = category;
    els.homeView.classList.remove('active');
    els.categoryView.classList.add('active');
    els.temperatureBaselineView.classList.remove('active');
    await renderActiveCategory();
}

async function renderActiveCategory() {
    if (!activeCategory) return;
    els.categoryTitle.textContent = activeCategory === 'MethodStatus' ? 'Method Call Status' : `${activeCategory} Sensors`;
    const html = await loadModuleHtml(activeCategory);
    const module = sensorModules[activeCategory];
    if (!module || typeof module.renderSensors !== 'function') {
        els.sensorList.innerHTML = renderEmptyState();
        return;
    }
    els.sensorList.innerHTML = module.renderSensors(sensorsData[activeCategory] || [], {
        html,
        renderSensorPanels,
        renderEmptyState,
        escapeHtml,
        category: activeCategory
    });
    if (typeof module.afterRender === 'function') {
        await module.afterRender();
    }
    requestAnimationFrame(() => {
        drawSensorCharts(activeCategory);
        if (typeof module.redraw === 'function') module.redraw();
    });
}

function showHomeView() {
    activeCategory = null;
    els.homeView.classList.add('active');
    els.categoryView.classList.remove('active');
    els.temperatureBaselineView.classList.remove('active');
}

function drawSensorCharts(category) {
    const renderToken = chartRenderToken += 1;
    const seriesList = sensorSeriesByCategory[category] || [];
    let index = 0;

    function drawNextBatch() {
        if (renderToken !== chartRenderToken) return;
        const batchEnd = Math.min(index + 2, seriesList.length);
        for (; index < batchEnd; index += 1) {
            const series = seriesList[index];
            const canvas = document.getElementById(chartIdFor(category, series.sensorName));
            if (canvas) drawLineChart(canvas, series);
        }
        if (index < seriesList.length) requestAnimationFrame(drawNextBatch);
    }

    requestAnimationFrame(drawNextBatch);
}

function updateSensorPanel(series) {
    if (!activeCategory || activeCategory !== series.category) return;
    const sensor = (sensorsData[series.category] || []).find(item => item.sensorName === series.sensorName);
    if (!sensor) return;
    const panel = els.sensorList.querySelector(`[data-sensor-name="${cssEscape(series.sensorName)}"]`);
    if (!panel) return;
    const level = normalizeLevel(sensor.anomalyLevel);
    const card = panel.querySelector('[data-sensor-card]');
    const valueEl = panel.querySelector('[data-current-value]');
    const levelEl = panel.querySelector('[data-anomaly-level]');
    const timeEl = panel.querySelector('[data-event-time]');
    if (card) {
        card.classList.remove('anomaly-normal', 'anomaly-low', 'anomaly-high');
        card.classList.add(`anomaly-${level}`);
    }
    if (valueEl) {
        valueEl.className = `detail-value ${level}`;
        valueEl.textContent = `${sensor.value} ${sensor.valueUnit}`;
    }
    if (levelEl) {
        levelEl.className = `anomaly-pill ${level}`;
        levelEl.textContent = sensor.anomalyLevel;
    }
    if (timeEl) timeEl.textContent = sensor.taipeiTime;
}

function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(value);
    return String(value).replace(/["\\]/g, '\\$&');
}

function updateChartForSeries(series) {
    const canvas = document.getElementById(chartIdFor(series.category, series.sensorName));
    if (!canvas) return;
    setChartContainerHeight(canvas, series);
    const chart = chartInstances.get(chartIdFor(series.category, series.sensorName));
    if (!chart || chart.canvas !== canvas) {
        drawLineChart(canvas, series);
        return;
    }
    chart.data.datasets = buildChartDatasets(series);
    applyZoomRangeToChart(series, chart);
    chart.update('none');
}

function drawAllVisibleCharts(category) {
    (sensorSeriesByCategory[category] || []).forEach(series => {
        const canvas = document.getElementById(chartIdFor(category, series.sensorName));
        if (canvas) drawLineChart(canvas, series);
    });
}

function drawLineChart(canvas, series) {
    setChartContainerHeight(canvas, series);
    if (!series.records.length) {
        hideChartContainer(canvas, series);
        return;
    }

    if (!window.Chart) {
        showChartError(canvas, series, new Error('Chart.js is not loaded.'));
        return;
    }

    try {
        const chartId = chartIdFor(series.category, series.sensorName);
        const existing = chartInstances.get(chartId);
        if (existing && existing.canvas === canvas) {
            existing.data.datasets = buildChartDatasets(series);
            existing.options = buildChartOptions(series);
            applyZoomRangeToChart(series, existing);
            existing.update('none');
            showChartCanvas(canvas);
            return;
        }
        if (existing) existing.destroy();

        const datasets = buildChartDatasets(series);
        const chart = new Chart(canvas, {
            type: 'line',
            data: {
                datasets
            },
            options: buildChartOptions(series)
        });
        chartInstances.set(chartId, chart);
        showChartCanvas(canvas);
    } catch (error) {
        showChartError(canvas, series, error);
    }
}

function setChartContainerHeight(canvas, series) {
    const container = canvas.closest('[data-chart-container]');
    if (!container) return;
    const height = chartHeightForSeries(series);
    container.style.height = `${height}px`;
    canvas.height = height;
}

function showChartCanvas(canvas) {
    const container = canvas.closest('[data-chart-container]');
    const errorEl = container?.querySelector('[data-chart-error]');
    if (container) {
        container.hidden = false;
        container.classList.remove('chart-render-failed');
    }
    canvas.hidden = false;
    if (errorEl) errorEl.hidden = true;
}

function showChartError(canvas, series, error) {
    console.error(`Chart render failed for ${series.category}/${series.sensorName}:`, error);
    const chartId = chartIdFor(series.category, series.sensorName);
    const existing = chartInstances.get(chartId);
    if (existing) {
        existing.destroy();
        chartInstances.delete(chartId);
    }
    const container = canvas.closest('[data-chart-container]');
    const errorEl = container?.querySelector('[data-chart-error]');
    if (container) {
        container.hidden = false;
        container.classList.add('chart-render-failed');
        container.style.height = 'auto';
    }
    canvas.hidden = true;
    if (errorEl) {
        errorEl.textContent = 'Unable to load chart.';
        errorEl.hidden = false;
    }
}

function hideChartContainer(canvas, series) {
    console.error(`Chart hidden for ${series.category}/${series.sensorName}: no chart data available.`);
    const chartId = chartIdFor(series.category, series.sensorName);
    const existing = chartInstances.get(chartId);
    if (existing) {
        existing.destroy();
        chartInstances.delete(chartId);
    }
    const container = canvas.closest('[data-chart-container]');
    if (container) container.hidden = true;
}

function buildChartDatasets(series) {
    const valuePoints = series.records.map(record => ({
        x: record.timestampMs,
        y: record.value,
        anomalyLevel: record.anomalyLevel,
        value: record.value,
        timeLabel: timestampToLabel(record.timestampMs)
    }));
    const lowerPoints = series.records
        .filter(record => Number.isFinite(record.lowerBound))
        .map(record => ({ x: record.timestampMs, y: record.lowerBound }));
    const upperPoints = series.records
        .filter(record => Number.isFinite(record.upperBound))
        .map(record => ({ x: record.timestampMs, y: record.upperBound }));
    const anomalyPoints = series.records
        .filter(record => record.isAnomaly)
        .map(record => ({
            x: record.timestampMs,
            y: record.value,
            anomalyLevel: record.anomalyLevel,
            value: record.value,
            timeLabel: timestampToLabel(record.timestampMs)
        }));
    const current = currentPointForSeries(series);
    const markerPoints = current ? [{ x: current.timestampMs, y: current.value }] : [];

    return [
        {
            label: 'Sensor Value',
            data: valuePoints,
            borderColor: '#2563eb',
            backgroundColor: '#2563eb',
            borderWidth: 2.5,
            pointRadius: 0,
            pointHoverRadius: 5,
            tension: 0.18
        },
        {
            label: 'Lower Bound',
            data: lowerPoints,
            borderColor: '#f59e0b',
            backgroundColor: '#f59e0b',
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 0,
            borderDash: [6, 4],
            tension: 0.18
        },
        {
            label: 'Upper Bound',
            data: upperPoints,
            borderColor: '#ef4444',
            backgroundColor: '#ef4444',
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 0,
            borderDash: [6, 4],
            tension: 0.18
        },
        {
            label: 'Anomaly Points',
            data: anomalyPoints,
            borderColor: 'transparent',
            backgroundColor: context => normalizeLevel(context.raw?.anomalyLevel) === 'high' ? '#dc2626' : '#f59e0b',
            pointRadius: 6,
            pointHoverRadius: 8,
            showLine: false
        },
        {
            label: 'Replay position marker',
            data: markerPoints,
            borderColor: '#111827',
            backgroundColor: '#111827',
            pointRadius: series.mode === 'replay' ? 7 : 0,
            pointHoverRadius: series.mode === 'replay' ? 8 : 0,
            showLine: false
        }
    ];
}

function buildChartOptions(series) {
    const yRange = getSeriesYRange(series);
    const xScale = {
        type: 'linear',
        title: {
            display: true,
            text: 'Time (timestamp)'
        },
        ticks: {
            maxRotation: 0,
            callback: value => timestampToLabel(value)
        }
    };
    if (series.zoomRange) {
        xScale.min = series.zoomRange.min;
        xScale.max = series.zoomRange.max;
    }

    return {
        responsive: true,
        maintainAspectRatio: false,
        parsing: false,
        normalized: true,
        animation: false,
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        plugins: {
            decimation: {
                enabled: true,
                algorithm: 'lttb',
                samples: 900,
                threshold: 1200
            },
            tooltip: {
                enabled: true,
                intersect: false,
                filter: item => item.dataset.label === 'Sensor Value' || item.dataset.label === 'Anomaly Points',
                callbacks: {
                    title: items => {
                        const raw = items[0]?.raw;
                        return raw?.timeLabel || timestampToLabel(raw?.x);
                    },
                    label: item => {
                        const raw = item.raw || {};
                        const level = raw.anomalyLevel || nearestRecordLevel(series.records, raw.x);
                        return [
                            `${item.dataset.label}: ${Number(raw.y).toFixed(3)}`,
                            `anomaly_level: ${displayLevel(level)}`
                        ];
                    }
                }
            },
            legend: {
                labels: {
                    usePointStyle: true
                }
            },
            zoom: {
                limits: {
                    x: {
                        min: series.records[0]?.timestampMs,
                        max: series.records[series.records.length - 1]?.timestampMs
                    }
                },
                pan: {
                    enabled: true,
                    mode: 'x',
                    onPanComplete: ({ chart }) => rememberChartZoom(series, chart)
                },
                zoom: {
                    wheel: {
                        enabled: true
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'x',
                    onZoomComplete: ({ chart }) => rememberChartZoom(series, chart)
                }
            }
        },
        scales: {
            x: xScale,
            y: {
                min: yRange.min,
                max: yRange.max,
                title: {
                    display: true,
                    text: 'Sensor Value'
                }
            }
        }
    };
}

function getSeriesYRange(series) {
    const values = series.records.flatMap(record => [
        record.value,
        record.lowerBound,
        record.upperBound
    ].filter(Number.isFinite));

    if (!values.length) return { min: undefined, max: undefined };

    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min;
    const padding = range > 0 ? range * 0.08 : Math.max(Math.abs(max) * 0.08, 1);

    return {
        min: min - padding,
        max: max + padding
    };
}

function applyZoomRangeToChart(series, chart) {
    if (!series.zoomRange || !chart.options.scales?.x) return;
    chart.options.scales.x.min = series.zoomRange.min;
    chart.options.scales.x.max = series.zoomRange.max;
}

function rememberChartZoom(series, chart) {
    const scale = chart.scales?.x;
    if (!scale) return;
    series.zoomRange = { min: scale.min, max: scale.max };
}

function nearestRecordLevel(records, timestampMs) {
    if (!records.length || !Number.isFinite(Number(timestampMs))) return 'normal';
    const index = indexAtOrBefore(records, Number(timestampMs));
    return records[index]?.anomalyLevel || 'normal';
}

function drawLegacyLineChart(canvas, series) {
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    const cssHeight = 360;
    canvas.width = Math.max(760, rect.width * ratio);
    canvas.height = cssHeight * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const width = canvas.width / ratio;
    const height = canvas.height / ratio;
    const padding = { top: 18, right: 18, bottom: 60, left: 64 };
    const records = getVisibleRecords(series);
    if (!records.length) return;

    const values = records.flatMap(record => [record.value, record.lowerBound, record.upperBound].filter(Number.isFinite));
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max === min ? 1 : max - min;
    const xFor = index => padding.left + (index / Math.max(records.length - 1, 1)) * (width - padding.left - padding.right);
    const yFor = value => padding.top + (1 - ((value - min) / range)) * (height - padding.top - padding.bottom);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    drawGrid(ctx, width, height, padding, min, range, yFor);
    drawSeriesLine(ctx, records, xFor, yFor, 'value', '#2563eb', false);
    drawSeriesLine(ctx, records, xFor, yFor, 'lowerBound', '#f59e0b', true);
    drawSeriesLine(ctx, records, xFor, yFor, 'upperBound', '#ef4444', true);
    drawAnomalyPoints(ctx, records, xFor, yFor);
    if (series.mode === 'replay') drawReplayMarker(ctx, series, records, xFor, yFor, height, padding);
    drawAxisLabels(ctx, width, height, padding, records);
}

function getVisibleRecords(series) {
    const size = Math.max(5, Math.min(series.viewSize || series.records.length, series.records.length));
    if (size >= series.records.length) return series.records;
    const half = Math.floor(size / 2);
    let start = series.currentIndex - half;
    start = Math.max(0, Math.min(start, series.records.length - size));
    return series.records.slice(start, start + size);
}

function drawGrid(ctx, width, height, padding, min, range, yFor) {
    ctx.strokeStyle = '#e5e7eb';
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Segoe UI, sans-serif';
    for (let i = 0; i <= 4; i += 1) {
        const value = min + (range * i / 4);
        const y = yFor(value);
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
        ctx.fillText(value.toFixed(2), 10, y + 4);
    }
}

function drawSeriesLine(ctx, records, xFor, yFor, field, color, dashed) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = field === 'value' ? 2.5 : 1.5;
    ctx.setLineDash(dashed ? [6, 4] : []);
    let started = false;
    records.forEach((record, index) => {
        const value = record[field];
        if (!Number.isFinite(value)) return;
        if (!started) {
            ctx.moveTo(xFor(index), yFor(value));
            started = true;
        } else {
            ctx.lineTo(xFor(index), yFor(value));
        }
    });
    ctx.stroke();
    ctx.setLineDash([]);
}

function drawAnomalyPoints(ctx, records, xFor, yFor) {
    records.forEach((record, index) => {
        if (!record.isAnomaly) return;
        ctx.beginPath();
        ctx.fillStyle = normalizeLevel(record.anomalyLevel) === 'high' ? '#dc2626' : '#f59e0b';
        ctx.arc(xFor(index), yFor(record.value), 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

function drawReplayMarker(ctx, series, records, xFor, yFor, height, padding) {
    const current = currentPointForSeries(series);
    const visibleIndex = records.findIndex(record => record.seriesIndex === current.seriesIndex);
    if (visibleIndex < 0) return;
    const x = xFor(visibleIndex);
    const y = yFor(current.value);
    ctx.strokeStyle = '#111827';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 5]);
    ctx.beginPath();
    ctx.moveTo(x, padding.top);
    ctx.lineTo(x, height - padding.bottom);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.fillStyle = '#111827';
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
}

function drawAxisLabels(ctx, width, height, padding, allRecords) {
    ctx.fillStyle = '#334155';
    ctx.font = '12px Segoe UI, sans-serif';
    ctx.fillText('Time (timestamp)', width / 2 - 44, height - 16);
    ctx.save();
    ctx.translate(18, height / 2 + 42);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Sensor Value', 0, 0);
    ctx.restore();
    if (allRecords.length) {
        const firstLabel = timestampToLabel(allRecords[0].timestampMs);
        const lastLabel = timestampToLabel(allRecords[allRecords.length - 1].timestampMs);
        ctx.fillText(firstLabel, padding.left, height - 40);
        ctx.fillText(lastLabel, width - padding.right - ctx.measureText(lastLabel).width, height - 40);
    }
}

function updateCategoryCounts() {
    els.categoryBtns.forEach(btn => {
        const category = btn.dataset.category;
        const countEl = btn.querySelector('.count');
        if (countEl && dataLoaded && Object.prototype.hasOwnProperty.call(sensorsData, category)) {
            countEl.textContent = `${(sensorsData[category] || []).length} sensors`;
        }
    });
}

function updateStatistics() {
    const allSensors = Object.values(sensorsData).flat();
    els.totalSensors.textContent = allSensors.length;
    els.activeSensors.textContent = allSensors.filter(sensor => normalizeLevel(sensor.anomalyLevel) === 'normal').length;
    const latestTimestamp = Object.values(sensorSeriesByCategory)
        .flat()
        .map(series => currentPointForSeries(series)?.timestampMs)
        .filter(Number.isFinite)
        .sort((a, b) => b - a)[0];
    els.lastUpdate.textContent = Number.isFinite(latestTimestamp) ? timestampToLabel(latestTimestamp) : '-';
    updateCategoryCounts();
}

function setupEventListeners() {
    els.categoryBtns.forEach(btn => {
        if (btn.dataset.category) btn.addEventListener('click', () => showCategoryView(btn.dataset.category));
    });
    els.backBtn.addEventListener('click', showHomeView);
    els.sensorList.addEventListener('click', handleChartControlClick);
    els.sensorList.addEventListener('input', handleChartControlInput);
    window.addEventListener('resize', () => {
        if (!activeCategory) return;
        drawSensorCharts(activeCategory);
        const module = sensorModules[activeCategory];
        if (module && typeof module.redraw === 'function') module.redraw();
    });
}

function seriesFromControl(control) {
    const panel = control.closest('.chart-control-panel');
    if (!panel) return null;
    return findSeries(panel.dataset.category, panel.dataset.sensorName);
}

function handleChartControlClick(event) {
    const control = event.target.closest('button[data-action]');
    if (!control) return;
    const series = seriesFromControl(control);
    if (!series) return;
    const action = control.dataset.action;
    if (action === 'mode') setSeriesMode(series, control.dataset.mode);
    if (action === 'play') playSeries(series);
    if (action === 'pause') {
        pauseSeries(series);
        refreshAfterSeriesChange();
    }
    if (action === 'reset') resetSeries(series, false);
    if (action === 'reset-zoom') resetSeriesZoom(series);
}

function handleChartControlInput(event) {
    const control = event.target.closest('input[data-action]');
    if (!control) return;
    const series = seriesFromControl(control);
    if (!series) return;
    if (control.dataset.action === 'timeline') setSeriesTimeline(series, control.value);
    if (control.dataset.action === 'zoom') setSeriesZoom(series, control.value);
}

async function init() {
    setupEventListeners();
    await loadSensorSeries();
    Object.values(sensorModules).forEach(module => {
        if (typeof module.init === 'function') module.init();
    });
}

window.SensorDashboard = {
    registerSensorModule,
    showHomeView,
    updateStatistics,
    createSensorCard,
    renderSensorPanels,
    renderEmptyState,
    escapeHtml
};

document.addEventListener('DOMContentLoaded', () => {
    init().catch(error => {
        console.error('Dashboard initialization failed:', error);
    });
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && els.categoryView.classList.contains('active')) showHomeView();
});
