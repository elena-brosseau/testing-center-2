

export class Appointment {
    constructor(student, section, date) {
      this.student = student;
      this.section = section;
      this.date = date;
      this.allowed = [];
      this.format = null;
      this.classTime = null;
      this.returnPref = '';
      this.notes = '';
      this.proctor = '';
      this.returned = '';
      this.day = this.day;
      this.time = this.time;
      this.checks = this.checks;
      this.totalTime = this.totalTime;
    }

    day() {
        return this.date.toDateString();
    }

    time() {
        return this.date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    }

    checks() {
        let checks = 0;
        this.format && checks ++
        this.classTime && checks ++
        return checks
    }

    totalTime() {
        const mins = this.classTime * +this.student.extraTime;
        const minutes = Math.floor(mins % 60);
        const hours = Math.floor(mins / 60);

        return `${hours}:${minutes}`;
    }
}