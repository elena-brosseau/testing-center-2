import { useState } from 'react';
import './editAppt.css';
import { useDispatch, useSelector } from "react-redux";
import { editAppt } from '../../store/appointmentsSlice';
import { v4 as uuid } from 'uuid';
import { AllowedChecklist } from '../allowedChecklist/AllowedChecklist';

export function EditAppt(props) {

    const activeAppt = useSelector((state) => state.activeAppointment.appointment);
    const students = useSelector((state) => state.students.students);
    const dispatch = useDispatch()

    const offsetTimezone = (date) => {
        const offsetHours = date.getTimezoneOffset() / 60;
        const hour = date.toISOString().substring(11,13) - offsetHours;
        if (hour.toString().length < 2) {
            return `0${hour}${date.toISOString().substring(13,16)}`
        } else {
            return `${hour}${date.toISOString().substring(13,16)}`
        }
    }

    const student = students.find(student => student.key === activeAppt.student);
    const section = student.classes.find(section => section.name === activeAppt.section.name)

    const [allowed, setAllowed] = useState(activeAppt.allowed);

    const [appt, setAppt] = useState(activeAppt)
    const [apptInfo, setApptInfo] = useState({
        time: offsetTimezone(activeAppt.date),
        day: activeAppt.date.toISOString().substring(0,10),
        student: student.name,
        section: section.name
    })

    const studentObj = students.find(student => student.name === apptInfo.student);

    const handleCancelClick = () => {
        props.setEditMode(false)
    }

    const handleApptChange = (e) => {
        setAppt({
            ...appt,
            [e.target.name]: e.target.value,
          })
    }

    const handleInfoChange = (e) => {
        setApptInfo({
          ...apptInfo,
          [e.target.name]: e.target.value,
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault()

        const day = apptInfo.day.split('-')
        const time = apptInfo.time.split(':')

        const newAppt = {
            ...appt,
            date: new Date(day[0], --day[1], day[2], time[0], time[1]),
            student: studentObj.key,
            section: studentObj.classes.find(sec => sec.name === apptInfo.section),
            allowed: allowed
        }

        dispatch(editAppt({
            apptToChange: activeAppt,
            newAppt: newAppt
        }))

        handleCancelClick()
    }

    return (
        <div className='active-appt'>
            <div className='active-appt-header'>
                    <h2>Edit Appointment</h2>
                    <button onClick={handleCancelClick}>cancel</button>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="time"
                    name='time'
                    value={apptInfo.time}
                    onChange={handleInfoChange}
                />
                <input
                    type="date"
                    name='day'
                    value={apptInfo.day}
                    onChange={handleInfoChange}
                />
                <input
                    list='students'
                    name='student'
                    value={apptInfo.student}
                    onChange={handleInfoChange}
                />
                <datalist id='students'>
                    {students.map(student => <option key={uuid()}>{student.name}</option>)}
                </datalist>
                <select
                    name='section'
                    value={apptInfo.section}
                    onChange={handleInfoChange}
                >
                    {studentObj && studentObj.classes.map(section => <option key={uuid()} >{section.name}</option>)}
                </select>
                <div className='lower-form'>
                    <AllowedChecklist 
                        allowed={allowed}
                        setAllowed={setAllowed}
                    />
                    <p>Time allowed in class:</p>
                    <input
                        type='number'
                        name='classTime'
                        value={appt.classTime}
                        onChange={handleApptChange}
                    />
                    <p>Test Format:</p>
                    <input
                        type='text'
                        name='format'
                        value={appt.format}
                        onChange={handleApptChange}
                    />
                    <p>Return Preference:</p>
                    <input
                        type='text'
                        name='returnPref'
                        value={appt.returnPref}
                        onChange={handleApptChange}
                    />
                    <p>Notes:</p>
                    <textarea 
                        rows="5"
                        cols="33"
                        name="notes"
                        value={appt.notes}
                        onChange={handleApptChange}
                    >
                    </textarea>
                    <p>Proctor:</p>
                    <input
                        type='text'
                        name='proctor'
                        value={appt.proctor}
                        onChange={handleApptChange}
                    />
                    <p>Returned</p>
                    <input
                        type='text'
                        name='returned'
                        value={appt.returned}
                        onChange={handleApptChange}
                    />
                    <button type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}