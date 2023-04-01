import { Student } from "./student";


export const students = [];

students.push(new Student('Bob Smith', '01234567', '631-555-1234', ['Reader', 'Word Processor', 'Calculator'], '1.5'))

students[0].classes.push({
    name: 'BIO 105',
    professor: 'Jane Brown',
    days: ['Monday', 'Wednesday'],
    time: '12:30pm'
  });

students[0].classes.push({
    name: 'MAT 111',
    professor: 'John Johnson',
    days: ['Tuesday', 'Thursday'],
    time: '9:30am'
  });

students.push(new Student('Jill Jackson', '89012345', '631-555-5678', ['Reader', 'Calculator'], '2.0'))

students[1].classes.push({
    name: 'PNU 133',
    professor: 'Nina Brown',
    days: ['Tuesday', 'Thursday'],
    time: '3:30pm'
});

students[1].classes.push({
    name: 'MAT 111',
    professor: 'John Johnson',
    days: ['Monday', 'Wednesday'],
    time: '3:30pm'
});

students.push(new Student('Ryan Phillips', '01298765', '631-555-4567', ['Calculator'], '1.5'))

students[2].classes.push({
    name: 'PSY 101',
    professor: 'Kerry Smith',
    days: ['Tuesday'],
    time: '8:00am'
});

students[2].classes.push({
    name: 'MUS 102',
    professor: 'Mike Rodriguez',
    days: ['Monday', 'Wednesday', 'Friday'],
    time: '11:00am'
});

students.push(new Student('Sam Thomas', '01292457', '631-555-2953', ['Reader', 'Calculator'], '1.5'))

students[3].classes.push({
    name: 'PSY 101',
    professor: 'Kerry Smith',
    days: ['Tuesday'],
    time: '8:00am'
});

students[3].classes.push({
    name: 'MUS 102',
    professor: 'Mike Rodriguez',
    days: ['Monday', 'Wednesday', 'Friday'],
    time: '11:00am'
});


students.push(new Student('Jacob Ellison', '82345625', '631-555-1446', ['Word Processor', 'Calculator'], '2.0'))

students[4].classes.push({
    name: 'PNU 133',
    professor: 'Nina Brown',
    days: ['Tuesday', 'Thursday'],
    time: '3:30pm'
});

students[4].classes.push({
    name: 'MAT 111',
    professor: 'John Johnson',
    days: ['Monday', 'Wednesday'],
    time: '3:30pm'
});
