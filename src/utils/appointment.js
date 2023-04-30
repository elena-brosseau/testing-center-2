

export function getISOTime(date) {
    return new Date(date).toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
}

export function getISODay(date) {
    return new Date(date).toDateString();
}

export function apptChecks(test, form) {
    let checks = 0;
    test && checks ++
    form && checks ++
    return checks
}

export function totalTime(classTime, extraTime) {
    const mins = classTime * +extraTime;
    const minutes = Math.floor(mins % 60);
    const hours = Math.floor(mins / 60);

    return `${hours}:${minutes}`;
}