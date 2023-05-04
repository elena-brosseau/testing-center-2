import { students } from "./studentsPreload";
import { v4 as uuid } from 'uuid'

const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate()
}

export const appointments = [
    {
        key: uuid(),
        student: students[0].key,
        section: students[0].classes[0],
        date: new Date(today.year, today.month, today.day, 12, 30).toISOString(),
        test: true,
        form: true,
        allowed: ['Scrap Paper', 'Calculator', 'Other: 1 sheet of notes'],
        format: 'In File Cabinet',
        classTime: 75,
        returnPref: 'Email',
        notes: '3/24- professor included formula sheet -EB'
    },
    {
        key: uuid(),
        student: students[1].key,
        section: students[1].classes[1],
        date: new Date(today.year, today.month, today.day, 9, 30).toISOString(),
        test: true,
        form: true,
        allowed: ['Scrap Paper', 'Calculator'],
        format: 'In File Cabinet',
        classTime: 75,
        returnPref: 'Email',
        notes: '3/27- rescheduled from 3/28 -EB'
    },
    {
        key: uuid(),
        student: students[2].key,
        section: students[2].classes[0],
        date: new Date(today.year, today.month, (today.day + 1), 15, 30).toISOString(),
        allowed: [],
        test: false,
        form: false
    },
    {
        key: uuid(),
        student: students[3].key,
        section: students[3].classes[0],
        date: new Date(today.year, today.month, (today.day + 3), 11, 0).toISOString(),
        allowed: [],
        test: false,
        form: false
    },
    {
        key: uuid(),
        student: students[4].key,
        section: students[4].classes[0],
        date: new Date(today.year, today.month, (today.day + 3), 8, 0).toISOString(),
        test: true,
        form: true,
        allowed: ['Scrap Paper', 'Calculator'],
        format: 'Brightspace',
        classTime: 75,
        returnPref: 'Email',
        notes: '3/27- rescheduled from 3/28 -EB'
    },
    {
        key: uuid(),
        student: students[1].key,
        section: students[1].classes[1],
        date: new Date(today.year, today.month, (today.day + 4), 10, 30).toISOString(),
        test: true,
        form: true,
        allowed: ['Scrap Paper', 'Calculator', 'Other: 1 sheet of notes'],
        format: 'In File Cabinet',
        classTime: 75,
        returnPref: 'Email',
        notes: '3/24- professor included formula sheet -EB'
    },
    {
        key: uuid(),
        student: students[0].key,
        section: students[0].classes[0],
        date: new Date(today.year, today.month, (today.day + 6), 15, 30).toISOString(),
        test: true,
        form: true,
        allowed: ['Scrap Paper', 'Calculator'],
        format: 'Brightspace',
        classTime: 75,
        returnPref: 'Email',
        notes: '3/27- rescheduled from 3/28 -EB'
    },
    {
        key: uuid(),
        student: students[2].key,
        section: students[2].classes[1],
        date: new Date(today.year, today.month, (today.day + 6), 11, 0).toISOString(),
        allowed: [],
        test: false,
        form: false
    },
    {
        key: uuid(),
        student: students[3].key,
        section: students[3].classes[0],
        date: new Date(today.year, today.month, (today.day + 7), 15, 0).toISOString(),
        test: true,
        form: true,
        allowed: ['Scrap Paper', 'Calculator', 'Other: 1 sheet of notes'],
        format: 'In File Cabinet',
        classTime: 75,
        returnPref: 'Email',
        notes: '3/24- professor included formula sheet -EB'
    },
    {
        key: uuid(),
        student: students[0].key,
        section: students[0].classes[1],
        date: new Date(today.year, today.month, (today.day + 9), 8, 0).toISOString(),
        allowed: [],
        test: false,
        form: false
    },
    {
        key: uuid(),
        student: students[4].key,
        section: students[4].classes[0],
        date: new Date(today.year, today.month, (today.day + 9), 12, 0).toISOString(),
        allowed: [],
        test: false,
        form: false
    }
];