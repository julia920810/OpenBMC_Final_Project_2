const analysisSensorFiles = [
    { category: 'airflow', sensorName: 'SYSTEM_AIRFLOW_CFM', path: '../../statistics_test/airflow/anomaly_airflow-SYSTEM_AIRFLOW_CFM.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN0_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN0_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN1_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN1_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN4_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN4_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN5_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN5_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN8_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN8_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD0_FAN9_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD0_FAN9_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD1_FAN11_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD1_FAN11_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD1_FAN2_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD1_FAN2_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD1_FAN3_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD1_FAN3_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD1_FAN6_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD1_FAN6_48V_PWR_W.csv' },
    { category: 'power', sensorName: 'VIRTUAL_FANBOARD1_FAN7_48V_PWR_W', path: '../../statistics_test/power/anomaly_power-VIRTUAL_FANBOARD1_FAN7_48V_PWR_W.csv' },
    { category: 'temperature', sensorName: 'MGNT_TEMP_C', path: '../../statistics_test/temperature/anomaly_temperature-MGNT_TEMP_C.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_48V_AUX_VOLT_V', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_48V_AUX_VOLT_V.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN0_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN0_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN1_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN1_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN4_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN4_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN5_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN5_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN8_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN8_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD0_ADC_FAN9_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD0_ADC_FAN9_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_48V_AUX_VOLT_V', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_48V_AUX_VOLT_V.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_FAN11_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_FAN11_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_FAN2_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_FAN2_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_FAN3_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_FAN3_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_FAN6_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_FAN6_48V_CURR_A.csv' },
    { category: 'voltage', sensorName: 'FANBOARD1_ADC_FAN7_48V_CURR_A', path: '../../statistics_test/voltage/anomaly_voltage-FANBOARD1_ADC_FAN7_48V_CURR_A.csv' }
];

const analysisCategories = ['temperature', 'airflow', 'power', 'voltage'];
const singleSelectCategories = ['temperature', 'airflow'];
const multiSelectCategories = ['power', 'voltage'];
const maxSelectedSensors = 6;
const categoryLabels = {
    temperature: 'Temperature',
    airflow: 'Airflow',
    power: 'Power',
    voltage: 'Voltage'
};
const colors = ['#2563eb', '#16a34a', '#dc2626', '#7c3aed', '#f59e0b', '#0891b2', '#db2777', '#475569'];
const recordsBySensor = new Map();
const selectedSensors = new Map();
let analysisChart = null;
let correlationRows = [];

const els = {
    categoryCheckboxes: document.getElementById('categoryCheckboxes'),
    sensorSelectors: document.getElementById('sensorSelectors'),
    timeWindowSelect: document.getElementById('timeWindowSelect'),
    resetZoomBtn: document.getElementById('resetZoomBtn'),
    chartCanvas: document.getElementById('analysisChart'),
    chartEmpty: document.getElementById('chartEmpty'),
    eventTimeline: document.getElementById('eventTimeline')
};

function escapeHtml(value) {
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

function timestampToMilliseconds(timestamp) {
    const numeric = Number(timestamp);
    if (!Number.isFinite(numeric)) return NaN;
    return numeric > 1_000_000_000_000 ? numeric / 1000 : numeric;
}

function rawTimestampForRecord(record) {
    return record.timestamp || record.timestamp_realtime || record['timestamp-realtime'];
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

function normalizeLevel(level) {
    return String(level || 'normal').trim().toLowerCase();
}

function sensorKey(file) {
    return `${file.category}::${file.sensorName}`;
}

function sensorsForCategory(category) {
    return analysisSensorFiles.filter(file => file.category === category);
}

async function loadData() {
    await Promise.all(analysisSensorFiles.map(async file => {
        const response = await fetch(file.path);
        if (!response.ok) throw new Error(`Cannot load ${file.path}: ${response.status}`);
        const rawRecords = parseCsv(await response.text());
        const records = rawRecords.map(record => ({
            category: file.category,
            sensorName: file.sensorName,
            timestampMs: timestampToMilliseconds(rawTimestampForRecord(record)),
            rawTimestamp: rawTimestampForRecord(record),
            value: Number(record.value),
            lowerBound: Number(record.iqr_lower_bound),
            upperBound: Number(record.iqr_upper_bound),
            anomalyLevel: record.anomaly_level || 'normal'
        })).filter(record => Number.isFinite(record.timestampMs) && Number.isFinite(record.value))
            .sort((a, b) => a.timestampMs - b.timestampMs);
        recordsBySensor.set(sensorKey(file), records);
    }));
}

function renderSelectionControls() {
    els.categoryCheckboxes.innerHTML = `
        <div class="selection-limit-message" id="selectionLimitMessage" hidden>
            Please select no more than 6 sensors for comparison.
        </div>
        ${analysisCategories.map(category => `
        <label class="category-option">
            <input type="checkbox" value="${escapeHtml(category)}" checked>
            ${escapeHtml(categoryLabels[category])}
        </label>
        `).join('')}
    `;
    analysisCategories.forEach(category => {
        const firstSensor = sensorsForCategory(category)[0];
        if (!firstSensor) return;
        if (multiSelectCategories.includes(category)) {
            selectedSensors.set(category, [firstSensor.sensorName]);
        } else {
            selectedSensors.set(category, firstSensor.sensorName);
        }
    });
    renderSensorSelectors();
}

function renderSensorSelectors() {
    const checked = checkedCategories();
    const singleCards = checked.filter(category => singleSelectCategories.includes(category)).map(category => {
        const options = sensorsForCategory(category).map(file => `
            <option value="${escapeHtml(file.sensorName)}" ${selectedSensors.get(category) === file.sensorName ? 'selected' : ''}>
                ${escapeHtml(file.sensorName)}
            </option>
        `).join('');
        return `
            <div class="sensor-select-card">
                <label for="sensor-${escapeHtml(category)}">${escapeHtml(categoryLabels[category])}</label>
                <select id="sensor-${escapeHtml(category)}" data-category="${escapeHtml(category)}">${options}</select>
            </div>
        `;
    });
    const multiCards = checked.filter(category => multiSelectCategories.includes(category)).map(category => {
        const selected = selectedSensorNames(category);
        const options = sensorsForCategory(category).map(file => `
            <label class="sensor-checkbox-option">
                <input type="checkbox" data-category="${escapeHtml(category)}" value="${escapeHtml(file.sensorName)}" ${selected.includes(file.sensorName) ? 'checked' : ''}>
                <span>${escapeHtml(file.sensorName)}</span>
            </label>
        `).join('');
        return `
            <div class="sensor-select-card sensor-multi-card">
                <div class="multi-select-header">
                    <label>${escapeHtml(categoryLabels[category])}</label>
                    <div class="multi-select-actions">
                        <button type="button" class="mini-action-btn" data-action="select-all" data-category="${escapeHtml(category)}">Select All</button>
                        <button type="button" class="mini-action-btn" data-action="clear-all" data-category="${escapeHtml(category)}">Clear All</button>
                    </div>
                </div>
                <div class="sensor-checkbox-list">${options}</div>
            </div>
        `;
    });
    els.sensorSelectors.innerHTML = [...singleCards, ...multiCards].join('');
}

function checkedCategories() {
    return Array.from(els.categoryCheckboxes.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
}

function selectedSensorNames(category) {
    const selected = selectedSensors.get(category);
    if (Array.isArray(selected)) return selected;
    return selected ? [selected] : [];
}

function selectedSensorCount() {
    const checked = new Set(checkedCategories());
    return Array.from(selectedSensors.entries()).reduce((sum, [category, sensors]) => {
        if (!checked.has(category)) return sum;
        return sum + (Array.isArray(sensors) ? sensors.length : Number(Boolean(sensors)));
    }, 0);
}

function showSelectionLimitMessage(show) {
    const message = document.getElementById('selectionLimitMessage');
    if (message) message.hidden = !show;
}

function wouldExceedLimit(category, nextSelection) {
    const currentCount = selectedSensorCount();
    const currentSelection = selectedSensorNames(category);
    return currentCount - currentSelection.length + nextSelection.length > maxSelectedSensors;
}

function selectedFiles() {
    return checkedCategories().flatMap(category => {
        const sensorNames = selectedSensorNames(category);
        return sensorNames.map(sensorName =>
            analysisSensorFiles.find(file => file.category === category && file.sensorName === sensorName)
        ).filter(Boolean);
    });
}

function normalizedRecords(file) {
    const records = recordsBySensor.get(sensorKey(file)) || [];
    const values = records.map(record => record.value).filter(Number.isFinite);
    if (!values.length) return [];
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min;
    return records.map(record => ({
        x: record.timestampMs,
        y: range === 0 ? 0.5 : (record.value - min) / range,
        originalValue: record.value,
        normalizedValue: range === 0 ? 0.5 : (record.value - min) / range,
        anomalyLevel: record.anomalyLevel,
        sensorName: file.sensorName,
        category: file.category,
        timeLabel: timestampToLabel(record.timestampMs)
    }));
}

function buildDatasets(files) {
    const datasets = [];
    files.forEach((file, index) => {
        const color = colors[index % colors.length];
        const points = normalizedRecords(file);
        datasets.push({
            label: file.sensorName,
            data: points,
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 5,
            tension: 0.16,
            parsing: false
        });
        datasets.push({
            label: `${file.sensorName} anomaly`,
            data: points.filter(point => normalizeLevel(point.anomalyLevel) !== 'normal'),
            borderColor: 'transparent',
            backgroundColor: context => normalizeLevel(context.raw?.anomalyLevel) === 'high' ? '#dc2626' : '#f59e0b',
            pointRadius: 6,
            pointHoverRadius: 8,
            showLine: false,
            parsing: false
        });
    });
    return datasets;
}

function renderChart() {
    const files = selectedFiles();
    if (!files.length) {
        if (analysisChart) analysisChart.destroy();
        analysisChart = null;
        els.chartCanvas.hidden = true;
        els.chartEmpty.hidden = false;
        return;
    }
    els.chartCanvas.hidden = false;
    els.chartEmpty.hidden = true;
    if (!window.Chart) {
        els.chartEmpty.hidden = false;
        els.chartEmpty.textContent = 'Unable to load chart.';
        console.error('Analysis chart render failed: Chart.js is not loaded.');
        return;
    }
    const data = { datasets: buildDatasets(files) };
    const options = {
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
                samples: 1000,
                threshold: 1500
            },
            tooltip: {
                intersect: false,
                callbacks: {
                    title: items => items[0]?.raw?.timeLabel || '-',
                    label: item => {
                        const raw = item.raw || {};
                        const label = item.dataset.label.replace(' anomaly', '');
                        return [
                            `Sensor Name: ${label}`,
                            `Original Value: ${Number(raw.originalValue).toFixed(3)}`,
                            `Normalized Value: ${Number(raw.normalizedValue).toFixed(3)}`,
                            `anomaly_level: ${String(raw.anomalyLevel || 'normal').toUpperCase()}`
                        ];
                    }
                }
            },
            legend: {
                labels: {
                    filter: item => !item.text.endsWith(' anomaly')
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x'
                },
                zoom: {
                    wheel: { enabled: true },
                    pinch: { enabled: true },
                    mode: 'x'
                }
            }
        },
        scales: {
            x: {
                type: 'linear',
                title: { display: true, text: 'Time (timestamp)' },
                ticks: { callback: value => timestampToLabel(value), maxRotation: 0 }
            },
            y: {
                min: -0.05,
                max: 1.05,
                title: { display: true, text: 'Normalized Sensor Value' }
            }
        }
    };
    if (analysisChart) {
        analysisChart.data = data;
        analysisChart.options = options;
        analysisChart.update('none');
    } else {
        analysisChart = new Chart(els.chartCanvas, { type: 'line', data, options });
    }
}

function correlationType(value) {
    if (value >= 0.7) return 'Strong Positive Correlation';
    if (value >= 0.3) return 'Moderate Positive Correlation';
    if (value > -0.3) return 'Weak or No Correlation';
    if (value > -0.7) return 'Moderate Negative Correlation';
    return 'Strong Negative Correlation';
}

function pearson(seriesA, seriesB) {
    const pairs = alignedPairs(seriesA, seriesB);
    if (pairs.length < 2) return NaN;
    const meanA = pairs.reduce((sum, pair) => sum + pair[0], 0) / pairs.length;
    const meanB = pairs.reduce((sum, pair) => sum + pair[1], 0) / pairs.length;
    let numerator = 0;
    let denomA = 0;
    let denomB = 0;
    pairs.forEach(([a, b]) => {
        const da = a - meanA;
        const db = b - meanB;
        numerator += da * db;
        denomA += da * da;
        denomB += db * db;
    });
    const denominator = Math.sqrt(denomA * denomB);
    return denominator === 0 ? NaN : numerator / denominator;
}

function alignedPairs(seriesA, seriesB) {
    const mapB = new Map(seriesB.map(record => [record.timestampMs, record.value]));
    const exact = seriesA
        .filter(record => mapB.has(record.timestampMs))
        .map(record => [record.value, mapB.get(record.timestampMs)]);
    if (exact.length >= 2) return exact;
    const count = Math.min(seriesA.length, seriesB.length);
    const pairs = [];
    for (let i = 0; i < count; i += 1) pairs.push([seriesA[i].value, seriesB[i].value]);
    return pairs;
}

function computeCorrelations(files) {
    const rows = [];
    for (let i = 0; i < files.length; i += 1) {
        for (let j = i + 1; j < files.length; j += 1) {
            const a = files[i];
            const b = files[j];
            const coefficient = pearson(recordsBySensor.get(sensorKey(a)) || [], recordsBySensor.get(sensorKey(b)) || []);
            rows.push({
                sensorA: a.sensorName,
                sensorB: b.sensorName,
                coefficient,
                type: Number.isFinite(coefficient) ? correlationType(coefficient) : 'Insufficient Data'
            });
        }
    }
    return rows;
}

function updateCorrelationEvidence() {
    const files = selectedFiles();
    correlationRows = computeCorrelations(files);
}

function abnormalEvents(files) {
    return files.flatMap(file => (recordsBySensor.get(sensorKey(file)) || [])
        .filter(record => normalizeLevel(record.anomalyLevel) !== 'normal')
        .map(record => ({
            category: file.category,
            sensorName: file.sensorName,
            timestampMs: record.timestampMs,
            value: record.value,
            anomalyLevel: record.anomalyLevel
        }))).sort((a, b) => a.timestampMs - b.timestampMs);
}

function groupCompositeEvents(events, windowMs) {
    const groups = [];
    events.forEach(event => {
        const lastGroup = groups[groups.length - 1];
        if (lastGroup && event.timestampMs - lastGroup.endTime <= windowMs) {
            lastGroup.members.push(event);
            lastGroup.endTime = Math.max(lastGroup.endTime, event.timestampMs);
        } else {
            groups.push({
                members: [event],
                startTime: event.timestampMs,
                endTime: event.timestampMs
            });
        }
    });
    return groups;
}

function rulesForCategories(categories) {
    const set = new Set(categories);
    if (set.size >= 3) return ['Multi-Sensor System Anomaly'];
    if (set.size === 1) return ['Sensor Outlier'];
    if (set.has('temperature') && set.has('airflow')) return ['Cooling Issue Detected'];
    if (set.has('temperature') && set.has('power')) return ['High Load or Thermal Stress'];
    if (set.has('voltage') && set.has('power')) return ['Possible PSU Anomaly'];
    return [];
}

function significantCorrelationEvidence(sensorNames) {
    return correlationRows
        .filter(row => sensorNames.includes(row.sensorA) && sensorNames.includes(row.sensorB))
        .filter(row => Number.isFinite(row.coefficient) && Math.abs(row.coefficient) >= 0.3)
        .map(row => `${row.sensorA} / ${row.sensorB}: ${row.coefficient.toFixed(3)} (${row.type})`);
}

function sensorEventSequence(members) {
    const summaries = new Map();
    members.forEach(member => {
        const key = `${member.category}::${member.sensorName}`;
        const current = summaries.get(key) || {
            sensorName: member.sensorName,
            category: member.category,
            levels: new Set(),
            firstTime: member.timestampMs,
            lastTime: member.timestampMs,
            count: 0
        };
        current.levels.add(String(member.anomalyLevel || 'normal').toUpperCase());
        current.firstTime = Math.min(current.firstTime, member.timestampMs);
        current.lastTime = Math.max(current.lastTime, member.timestampMs);
        current.count += 1;
        summaries.set(key, current);
    });
    return Array.from(summaries.values()).sort((a, b) => a.firstTime - b.firstTime);
}

function eventPattern(sequence) {
    const categories = [];
    sequence.forEach(item => {
        if (!categories.includes(item.category)) categories.push(item.category);
    });
    return categories.map(category => categoryLabels[category] || category).join(' \u2192 ');
}

function eventTimeRange(startTime, endTime) {
    return startTime === endTime
        ? timestampToLabel(startTime)
        : `${timestampToLabel(startTime)} ~ ${timestampToLabel(endTime)}`;
}

function buildCompositeEventSummaries() {
    const files = selectedFiles();
    const windowMs = Number(els.timeWindowSelect.value) * 1000;
    return groupCompositeEvents(abnormalEvents(files), windowMs).map((group, index) => {
        const members = group.members.slice().sort((a, b) => a.timestampMs - b.timestampMs);
        const sequence = sensorEventSequence(members);
        const categories = Array.from(new Set(members.map(member => member.category)));
        const sensorNames = Array.from(new Set(members.map(member => member.sensorName)));
        const levels = Array.from(new Set(members.map(member => String(member.anomalyLevel).toUpperCase())));
        const rules = rulesForCategories(categories);
        return {
            id: index + 1,
            members,
            sequence,
            categories,
            sensorNames,
            levels,
            count: members.length,
            startTime: group.startTime,
            endTime: group.endTime,
            timeRange: eventTimeRange(group.startTime, group.endTime),
            pattern: eventPattern(sequence),
            rootCauseTitle: rules[0] || 'Observed Event Pattern',
            rootCauseClass: rules.length ? 'root-cause-badge' : 'observed-pattern-badge',
            rules,
            reason: rules.length
                ? 'This event matches predefined rule-based RCA category combinations.'
                : 'This event shows temporal co-occurrence between selected sensors, but it does not match predefined root cause rules.',
            recommendedAction: rules.length
                ? 'Review the event sequence and affected sensors for operational context.'
                : 'Review sensor behavior and consider adding a new RCA rule if this pattern is meaningful.',
            significantEvidence: significantCorrelationEvidence(sensorNames)
        };
    });
}

function renderSequenceItems(sequence) {
    return sequence.map((item, index) => `
        <li class="event-sequence-item">
            <strong>${index + 1}. ${escapeHtml(item.sensorName)}</strong>
            <span>Category: ${escapeHtml(categoryLabels[item.category] || item.category)}</span>
            <span>Level: ${escapeHtml(Array.from(item.levels).join(', '))}</span>
            <span>Time Range: ${escapeHtml(eventTimeRange(item.firstTime, item.lastTime))}</span>
            <span>Count: ${escapeHtml(item.count)}</span>
        </li>
    `).join('');
}

function renderBadges(items, className = '') {
    return items.map(item => `<span class="event-badge ${className}">${escapeHtml(item)}</span>`).join('');
}

function renderEventTimeline() {
    const events = buildCompositeEventSummaries();
    if (!events.length) {
        els.eventTimeline.innerHTML = '<div class="analysis-empty">No anomaly event found for the selected sensors.</div>';
        return;
    }

    els.eventTimeline.innerHTML = events.slice(0, 80).map(event => `
        <article class="event-card">
            <div class="event-card-header">
                <div>
                    <span class="analysis-kicker">Event #${escapeHtml(event.id)}</span>
                    <h3>${escapeHtml(event.rootCauseTitle)}</h3>
                    <p class="event-time-range">${escapeHtml(event.timeRange)}</p>
                </div>
                <div class="event-badge-row">${renderBadges([event.rootCauseTitle], event.rootCauseClass)}</div>
            </div>
            <div class="rca-evidence-grid">
                <div class="rca-evidence-item"><span>Triggered Categories</span><strong>${renderBadges(event.categories.map(category => categoryLabels[category] || category))}</strong></div>
                <div class="rca-evidence-item"><span>Triggered Sensor Names</span><strong>${escapeHtml(event.sensorNames.join(', '))}</strong></div>
                <div class="rca-evidence-item"><span>Anomaly Count</span><strong>${escapeHtml(event.count)}</strong></div>
                <div class="rca-evidence-item"><span>Detected Anomaly Level</span><strong>${renderBadges(event.levels, 'level-badge')}</strong></div>
                <div class="rca-evidence-item"><span>Detected Event Pattern</span><strong>${escapeHtml(event.pattern || '-')}</strong></div>
                <div class="rca-evidence-item"><span>Reason</span><strong>${escapeHtml(event.reason)}</strong></div>
                <div class="rca-evidence-item"><span>Recommended Action</span><strong>${escapeHtml(event.recommendedAction)}</strong></div>
            </div>
            <section class="event-sequence-card">
                <h4>Event Sequence</h4>
                <ol class="event-sequence-list">${renderSequenceItems(event.sequence)}</ol>
            </section>
        </article>
    `).join('');
}

function refreshAnalysis() {
    renderChart();
    updateCorrelationEvidence();
    runRuleBasedRCA();
}

function runRuleBasedRCA() {
    renderEventTimeline();
}

function setupEvents() {
    els.categoryCheckboxes.addEventListener('change', event => {
        if (event.target.matches('input[type="checkbox"]')) {
            showSelectionLimitMessage(false);
            renderSensorSelectors();
            refreshAnalysis();
        }
    });
    els.sensorSelectors.addEventListener('change', event => {
        const select = event.target.closest('select[data-category]');
        if (select) {
            selectedSensors.set(select.dataset.category, select.value);
            showSelectionLimitMessage(false);
            refreshAnalysis();
            return;
        }
        const checkbox = event.target.closest('.sensor-checkbox-option input[type="checkbox"]');
        if (!checkbox) return;
        const category = checkbox.dataset.category;
        const currentSelection = selectedSensorNames(category);
        const nextSelection = checkbox.checked
            ? [...new Set([...currentSelection, checkbox.value])]
            : currentSelection.filter(sensorName => sensorName !== checkbox.value);
        if (checkbox.checked && wouldExceedLimit(category, nextSelection)) {
            checkbox.checked = false;
            showSelectionLimitMessage(true);
            return;
        }
        selectedSensors.set(category, nextSelection);
        showSelectionLimitMessage(false);
        refreshAnalysis();
    });
    els.sensorSelectors.addEventListener('click', event => {
        const button = event.target.closest('.mini-action-btn[data-action]');
        if (!button) return;
        const category = button.dataset.category;
        const action = button.dataset.action;
        const nextSelection = action === 'select-all'
            ? sensorsForCategory(category).map(file => file.sensorName)
            : [];
        if (action === 'select-all' && wouldExceedLimit(category, nextSelection)) {
            showSelectionLimitMessage(true);
            return;
        }
        selectedSensors.set(category, nextSelection);
        showSelectionLimitMessage(false);
        renderSensorSelectors();
        refreshAnalysis();
    });
    els.timeWindowSelect.addEventListener('change', () => {
        groupCompositeEvents(abnormalEvents(selectedFiles()), Number(els.timeWindowSelect.value) * 1000);
        runRuleBasedRCA();
    });
    els.resetZoomBtn.addEventListener('click', () => {
        if (analysisChart && typeof analysisChart.resetZoom === 'function') analysisChart.resetZoom();
    });
}

async function initAnalysis() {
    renderSelectionControls();
    setupEvents();
    await loadData();
    refreshAnalysis();
}

document.addEventListener('DOMContentLoaded', () => {
    initAnalysis().catch(error => {
        console.error('Analysis initialization failed:', error);
        els.chartEmpty.hidden = false;
        els.chartEmpty.textContent = 'Unable to load analysis data.';
    });
});
