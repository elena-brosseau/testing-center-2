import { v4 as uuid } from 'uuid'


export const students = [
    {
        key: uuid(),
        name: 'Bob Smith',
        id: '01234567',
        phone: '631-555-1234',
        accomms: ['Reader', 'Word Processor', 'Calculator'],
        extraTime: '1.5',
        classes: [
            {
                name: 'BIO 105',
                professor: 'Jane Brown',
                days: ['Monday', 'Wednesday'],
                time: '12:30pm'
            },
            {
                name: 'MAT 111',
                professor: 'John Johnson',
                days: ['Tuesday', 'Thursday'],
                time: '9:30am'
            }
        ]
    },
    {
        key: uuid(),
        name: 'Jill Jackson',
        id: '89012345',
        phone: '631-555-5678',
        accomms: ['Reader', 'Calculator'],
        extraTime: '2.0',
        classes: [
            {
                name: 'PNU 133',
                professor: 'Nina Brown',
                days: ['Tuesday', 'Thursday'],
                time: '3:30pm'
            },
            {
                name: 'MAT 111',
                professor: 'John Johnson',
                days: ['Monday', 'Wednesday'],
                time: '3:30pm'
            }
        ]
    },
    {
        key: uuid(),
        name: 'Ryan Phillips',
        id: '01298765',
        phone: '631-555-4567',
        accomms: ['Calculator'],
        extraTime: '1.5',
        classes: [
            {
                name: 'PSY 101',
                professor: 'Kerry Smith',
                days: ['Tuesday'],
                time: '8:00am'
            },
            {
                name: 'MUS 102',
                professor: 'Mike Rodriguez',
                days: ['Monday', 'Wednesday', 'Friday'],
                time: '11:00am'
            }
        ]
    },
    {
        key: uuid(),
        name: 'Sam Thomas',
        id: '01292457',
        phone: '631-555-2953',
        accomms: ['Reader', 'Calculator'],
        extraTime: '1.5',
        classes: [
            {
                name: 'PSY 101',
                professor: 'Kerry Smith',
                days: ['Tuesday'],
                time: '8:00am'
            },
            {
                name: 'MUS 102',
                professor: 'Mike Rodriguez',
                days: ['Monday', 'Wednesday', 'Friday'],
                time: '11:00am'
            }
        ]
    },
    {
        key: uuid(),
        name: 'Jacob Ellison',
        id: '82345625',
        phone: '631-555-1446',
        accomms: ['Word Processor', 'Calculator'],
        extraTime: '2.0',
        classes: [
            {
                name: 'PNU 133',
                professor: 'Nina Brown',
                days: ['Tuesday', 'Thursday'],
                time: '3:30pm'
            },
            {
                name: 'MAT 111',
                professor: 'John Johnson',
                days: ['Monday', 'Wednesday'],
                time: '3:30pm'
            }
        ]
    }
];









