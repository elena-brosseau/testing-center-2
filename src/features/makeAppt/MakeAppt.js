import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addAppt } from '../../store/appointmentsSlice';
import { setActiveAppt } from '../../store/activeAppointmentSlice';
import './makeAppt.css';
import { Link } from 'react-router-dom';
import { setDate } from '../../store/firstCalendarDateSlice';
import { v4 as uuid } from 'uuid'


// Display class options
function Section({ active, section, onClick}) {
    
    return (
      <div 
        data-testid='section'
        onClick={onClick}
        className={active ? 'highlight' : ''}
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
    dispatch(setActiveAppt(null))
  }, [])

  const students = useSelector((state) => state.students.students);

  const [require, setRequire] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [apptSelect, setApptSelect] = useState(null);
  const [section, setSection] = useState(null);

  const [apptInfo, setApptInfo] = useState({
      student: '',
      day: '',
      time: ''
  });

  // student object
  const studentObj = students.find(student => student.name === apptInfo.student);
  // date object
  const day = apptInfo.day.split('-')
  const time = apptInfo.time.split(':')
  const date = new Date(day[0], --day[1], day[2], time[0], time[1])

  const handleChange = (e) => {
    setApptInfo({
      ...apptInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // check if a class is selected
    if (section) {

      const appointment = {
        key: uuid(),
        student: studentObj.key,
        section: section,
        date: date.toISOString(),
        allowed: [],
    }
      
      dispatch(addAppt(appointment))
      setApptSelect(appointment)
      setConfirmed(true)
    } else {
      setRequire(true)
    }
  }

  const handleViewApptClick = () => {
    dispatch(setActiveAppt(apptSelect))
    dispatch(setDate(apptSelect.date))
  }

  const resetForm = () => {
    setConfirmed(false);
    setApptInfo({
      student: '',
      day: '',
      time: ''
    })
  }


  return  (
              <div>
                {confirmed
                ? <div>
                    <p>Appointment Scheduled:</p>
                    <p>{apptInfo.student}</p>
                    <p>{section.name}, {section.professor}</p>
                    <p>{date.toDateString()}</p>
                    <p>{date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}</p>
                    <Link to='/'>
                      <button onClick={handleViewApptClick}>
                        View Appointment Details
                      </button>
                    </Link>
                    <button onClick={resetForm}>
                      Make Another Appointment
                    </button>
                  </div>
                : <form
                    id='appt-form'
                    onSubmit={handleSubmit}
                    className={require ? 'require' : ''}
                  >
                    <input
                        type='date'
                        name='day'
                        value={apptInfo.day}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='time'
                        name='time'
                        value={apptInfo.time}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='text'
                        name='student'
                        value={apptInfo.student}
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
                } 
              </div>
              
  )
}


