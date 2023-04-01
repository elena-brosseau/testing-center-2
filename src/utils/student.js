

export class Student {
    constructor(name, id, phone, accomms, extraTime) {
      this.name = name;
      this.id = id;
      this.phone = phone;
      this.accomms = accomms;
      this.extraTime = extraTime;
      this.classes = [];
    }
    displayStudentInfo() {
      return (
        <div>
          <p>Name: {this.name}</p>
          <p>ID: {this.id}</p>
          <p>Phone: {this.phone}</p>
        </div>
      )
    }
    displayClasses() {
      return this.classes.map((element) => {
      return (
        <div className='section'>
          <p>{element.name} - {element.professor}</p>
          <p>{element.time} - {element.days.join(', ')}</p>
          <br></br>
        </div>
    )})
    }
  }