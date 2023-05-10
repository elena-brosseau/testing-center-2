


export function nextFiveDates(firstDate, appointments) {

    const nextFiveDates = [];

    for (let i = 0; nextFiveDates.length < 5; i++) {
    
        let day = {}

        const date = {
            year: firstDate.getFullYear(),
            month: firstDate.getMonth(),
            day: firstDate.getDate()
        }

        const nextDay = new Date(date.year, date.month, (date.day + i));
    
        if (nextDay.getDay() === 0) {
            i += 1;
        } else if (nextDay.getDay() === 6) {
            i += 2;
        }
    
        const newNextDay = new Date(date.year, date.month, (date.day + i));
    
        day.date = newNextDay;
        day.appts = appointments.filter((appt) => 
            getDate(appt.date) === newNextDay.toISOString()
        )

        nextFiveDates.push(day);
    }

    return nextFiveDates;
}

function getDate(iso) {
    const date = new Date(iso)
    date.setHours(0, 0, 0, 0)

    return date.toISOString()
}
