import { Appointment } from "./appointment";
import { students } from "./studentsPreload";

export const appointments = [];

const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate()
}

appointments.push(new Appointment(
    students[0],
    students[0].classes[0],
    new Date(today.year, today.month, today.day, 12, 30)
))

appointments[0].allowed = ['Scrap Paper', 'Calculator', 'Other: 1 sheet of notes'];
appointments[0].format = 'In File Cabinet';
appointments[0].classTime = 75;
appointments[0].returnPref = 'Email'
appointments[0].notes = '3/24- professor included formula sheet -EB'

appointments.push(new Appointment(
    students[1],
    students[1].classes[1],
    new Date(today.year, today.month, today.day, 9, 30)
))

appointments[1].allowed = ['Scrap Paper', 'Calculator'];
appointments[1].format = 'Brightspace';
appointments[1].classTime = 75;
appointments[1].returnPref = 'Pickup'
appointments[1].notes = '3/27- rescheduled from 3/28 -EB'

appointments.push(new Appointment(
    students[2],
    students[2].classes[0],
    new Date(today.year, today.month, (today.day + 1), 15, 30)
))

appointments.push(new Appointment(
    students[3],
    students[3].classes[0],
    new Date(today.year, today.month, (today.day + 3), 11, 0)
))

appointments.push(new Appointment(
    students[4],
    students[4].classes[0],
    new Date(today.year, today.month, (today.day + 3), 8, 0)
))

appointments[4].allowed = ['Scrap Paper', 'Calculator'];
appointments[4].format = 'Brightspace';
appointments[4].classTime = 75;
appointments[4].returnPref = 'Pickup'
appointments[4].notes = '3/27- rescheduled from 3/28 -EB'


appointments.push(new Appointment(
    students[1],
    students[1].classes[1],
    new Date(today.year, today.month, (today.day + 4), 10, 30)
))

appointments.push(new Appointment(
    students[0],
    students[0].classes[0],
    new Date(today.year, today.month, (today.day + 6), 15, 30)
))

appointments[5].allowed = ['Scrap Paper', 'Calculator'];
appointments[5].format = 'Brightspace';
appointments[5].classTime = 75;
appointments[5].returnPref = 'Pickup'
appointments[5].notes = '3/27- rescheduled from 3/28 -EB'

appointments.push(new Appointment(
    students[2],
    students[2].classes[1],
    new Date(today.year, today.month, (today.day + 6), 11, 0)
))

appointments.push(new Appointment(
    students[3],
    students[3].classes[0],
    new Date(today.year, today.month, (today.day + 7), 15, 0)
))

appointments[8].allowed = ['Scrap Paper', 'Calculator', 'Other: 1 sheet of notes'];
appointments[8].format = 'In File Cabinet';
appointments[8].classTime = 75;
appointments[8].returnPref = 'Email'
appointments[8].notes = '3/24- professor included formula sheet -EB'

appointments.push(new Appointment(
    students[0],
    students[0].classes[1],
    new Date(today.year, today.month, (today.day + 9), 8, 0)
))

appointments.push(new Appointment(
    students[4],
    students[4].classes[0],
    new Date(today.year, today.month, (today.day + 9), 12, 0)
))