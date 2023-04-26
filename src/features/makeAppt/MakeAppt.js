import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addAppt } from '../../store/appointmentsSlice';
import { clearAppt } from '../../store/activeAppointmentSlice';
import { Appointment } from '../../utils/appointment'
import './makeAppt.css';


// Display class options
function Section({ active, section, onClick}) {
    
    return (
      <div 
        className={active && 'highlight'}
        onClick={onClick}
      >
        <p>{section.name}</p>
        <p>{section.professor}</p>
        <p>{section.days.join(', ')}</p>
        <p>{section.time}</p>
      </div>
    )
}

export function MakeAppt({ setActiveTab }) {

  const dispatch = useDispatch()

  useEffect(() => {
    setActiveTab(2)
    dispatch(clearAppt())
  }, [])

  const students = useSelector((state) => state.students.students);

  const [require, setRequire] = useState(false);
  
  const [section, setSection] = useState(null);

  const [appt, setAppt] = useState({
      student: '',
      day: '',
      time: ''
  });

  const studentObj = students.find(student => student.name === appt.student);

  const handleChange = (e) => {
    setAppt({
      ...appt,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // format date/time inputs into date object
    const day = appt.day.split('-')
    const time = appt.time.split(':')
    const date = new Date(day[0], --day[1], day[2], time[0], time[1])

    // check if a class is selected
    section
    ? dispatch(addAppt(new Appointment(studentObj, section, date)))
    : setRequire(true)

  }


  return  (
              <form
                id='appt-form'
                onSubmit={handleSubmit}
                className={require && 'require'}
              >
                <input
                    type='date'
                    name='day'
                    value={appt.day}
                    onChange={handleChange}
                    required
                />
                <input
                    type='time'
                    name='time'
                    value={appt.time}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    name='student'
                    value={appt.student}
                    onChange={handleChange}
                    placeholder='Student Search'
                    required
                />
                {studentObj && studentObj.classes.map((option, index) => 
                  <Section
                    key={index}
                    section={option}
                    active={option === section}
                    onClick={() => {
                      setSection(option)
                      setRequire(false)
                    }}
                  />
                )}
                <button type='submit'>Save</button>
              </form>
  )
}

