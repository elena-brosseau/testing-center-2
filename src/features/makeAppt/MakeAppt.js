import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addAppt } from '../../store/appointmentsSlice';
import { setActiveAppt } from '../../store/activeAppointmentSlice';
import './makeAppt.css';
import { Link } from 'react-router-dom';
import { setDate } from '../../store/firstCalendarDateSlice';
import { v4 as uuid } from 'uuid'
import { Section } from '../section/Section';


export function MakeAppt({ setActiveTab }) {

  const dispatch = useDispatch()

  useEffect(() => {
    setActiveTab(2)
    dispatch(setActiveAppt(null))
  }, [setActiveTab, dispatch])

  const students = useSelector((state) => state.students.students);

  const [require, setRequire] = useState({});
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



  useEffect(() => {
    // reset section if student changes
    if (!studentObj) {
      setSection(null)
    }
    // reset require if student changes
    if (require.student && studentObj) {
      setRequire ({
        ...require,
        student: false
      })
    }
  }, [studentObj, require])

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
      if (!studentObj) {
        setRequire({
          ...require,
          student: true
        })
      } else {
        setRequire({
          ...require,
          section: true
        })
      }
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
                ? <div className='appt-confirmation'>
                    <p className='title'>Appointment Scheduled:</p>
                    <div className='section'>
                      <p>{apptInfo.student}</p>
                      <p>{section.name} / {section.professor}</p>
                    </div>
                    <div className='section'>
                      <p>{date.toDateString()}</p>
                      <p>{date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}</p>
                    </div>
                    <div className='btns'>
                      <Link to='/'>
                        <button onClick={handleViewApptClick}>
                          View Appointment Details
                        </button>
                      </Link>
                      <button onClick={resetForm}>
                        Make Another Appointment
                      </button>
                    </div>
                  </div>
                : <form
                    id='appt-form'
                    onSubmit={handleSubmit}
                  >
                    <div className='section'>
                      <p>Date & Time:</p>
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
                    </div>
                    <div className='section'>
                      <p>Student:</p>
                      <input
                          type='text'
                          name='student'
                          value={apptInfo.student}
                          onChange={handleChange}
                          placeholder='Student Search'
                          required
                      />
                      {(require.student)
                        && <p className='require'>Student not found.</p>
                      }
                    </div>
                    <div className='section'>
                      {studentObj 
                      && <div>
                          <p>Classes:</p>
                          {(studentObj.classes.length < 1)
                          && <p className='require'>This student has no saved classes.</p>}
                          {studentObj.classes.map((option, index) => 
                          <Section
                            key={index}
                            section={option}
                            active={option === section}
                            onClick={() => {
                              setSection(option)
                              setRequire({
                                student: false,
                                section: false
                              })
                            }}
                          />
                        )}
                        {(require.section)
                          && <p className='require'>Please select a class.</p>
                        }
                        </div>}
                    </div>
                    <button type='submit'>Confirm</button>
                  </form>
                } 
              </div>
              
  )
}


