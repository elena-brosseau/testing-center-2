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

    const [apptInfo, setApptInfo] = useState({
        time: offsetTimezone(activeAppt.date),
        day: activeAppt.date.toISOString().substring(0,10),
        student: student.name,
        section: section.name,
        classTime: activeAppt.classTime,
        format: activeAppt.format,
        returnPref: activeAppt.returnPref,
        notes: activeAppt.notes,
        proctor: activeAppt.proctor,
        returned: activeAppt.returned
    })

    const studentObj = students.find(student => student.name === apptInfo.student);
    console.log(studentObj)

    const handleCancelClick = () => {
        props.setEditMode(false)
    }

    const handleChange = (e) => {
        setApptInfo({
          ...apptInfo,
          [e.target.name]: e.target.value,
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault()

        const day = apptInfo.day.split('-')
        const time = apptInfo.time.split(':')

        dispatch(editAppt({
            apptToChange: activeAppt,
            apptInfo: apptInfo,
            date: new Date(day[0], --day[1], day[2], time[0], time[1]),
            student: studentObj,
            section: studentObj.classes.find(x => x.name === apptInfo.section),
            allowed: allowed
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
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name='day'
                    value={apptInfo.day}
                    onChange={handleChange}
                />
                <input
                    list='students'
                    name='student'
                    value={apptInfo.student}
                    onChange={handleChange}
                />
                <datalist id='students'>
                    {students.map(student => <option key={uuid()}>{student.name}</option>)}
                </datalist>
                <select
                    name='section'
                    value={apptInfo.section}
                    onChange={handleChange}
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
                        value={apptInfo.classTime}
                        onChange={handleChange}
                    />
                    <p>Test Format:</p>
                    <input
                        type='text'
                        name='format'
                        value={apptInfo.format}
                        onChange={handleChange}
                    />
                    <p>Return Preference:</p>
                    <input
                        type='text'
                        name='returnPref'
                        value={apptInfo.returnPref}
                        onChange={handleChange}
                    />
                    <p>Notes:</p>
                    <textarea 
                        rows="5"
                        cols="33"
                        name="notes"
                        value={apptInfo.notes}
                        onChange={handleChange}
                    >
                    </textarea>
                    <p>Proctor:</p>
                    <input
                        type='text'
                        name='proctor'
                        value={apptInfo.proctor}
                        onChange={handleChange}
                    />
                    <p>Returned</p>
                    <input
                        type='text'
                        name='returned'
                        value={apptInfo.returned}
                        onChange={handleChange}
                    />
                    <button type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}