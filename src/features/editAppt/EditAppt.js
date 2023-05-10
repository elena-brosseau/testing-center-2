import { useEffect, useState } from 'react';
import './editAppt.css';
import { useDispatch, useSelector } from "react-redux";
import { editAppt } from '../../store/appointmentsSlice';
import { setActiveAppt } from '../../store/activeAppointmentSlice';
import { v4 as uuid } from 'uuid';
import { AllowedChecklist } from '../allowedChecklist/AllowedChecklist';

export function EditAppt({ setEditMode }) {

    const activeAppt = useSelector((state) => state.activeAppointment.appointment);
    const appointments = useSelector((state) => state.appointments.appointments)
    const students = useSelector((state) => state.students.students);
    const dispatch = useDispatch()

    const offsetTimezone = (date) => {
        const offsetHours = new Date(date).getTimezoneOffset() / 60;
        const hour = date.substring(11,13) - offsetHours;
        if (hour.toString().length < 2) {
            return `0${hour}${date.substring(13,16)}`
        } else {
            return `${hour}${date.substring(13,16)}`
        }
    }

    const student = students.find(student => student.key === activeAppt.student);
    const section = student.classes.find(section => section.name === activeAppt.section.name)

    const [allowed, setAllowed] = useState(activeAppt.allowed);

    const [appt, setAppt] = useState(activeAppt)
    const [apptInfo, setApptInfo] = useState({
        time: offsetTimezone(activeAppt.date),
        day: activeAppt.date.substring(0,10),
        student: student.name,
        section: section.name
    })

    const studentObj = students.find(student => student.name === apptInfo.student);

    // reset is user selects a diff appt
    useEffect(() => {
        activeAppt.key !== appt.key && setEditMode(false)
    }, [activeAppt, appt.key, setEditMode])

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

    const handleCheck = (e) => {
        setAppt({
            ...appt,
            [e.target.name]: e.target.checked,
          })
        console.log(appt)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const day = apptInfo.day.split('-')
        const time = apptInfo.time.split(':')

        const newAppt = {
            ...appt,
            date: new Date(day[0], --day[1], day[2], time[0], time[1]).toISOString(),
            student: studentObj.key,
            section: studentObj.classes.find(sec => sec.name === apptInfo.section),
            allowed: allowed
        }

        dispatch(editAppt({
            apptIndex: appointments.indexOf(activeAppt),
            newAppt: newAppt
        }))

        dispatch(setActiveAppt(newAppt))

        setEditMode(false)
    }

    return (
        <div className='active-appt'>
            <div className='active-appt-header'>
                    <h2>Edit Appointment</h2>
            </div>
            <form
                className='edit-appt-form'
                onSubmit={handleSubmit}
            >
                <div className='key-info'>
                    <div>
                        <input
                            type="time"
                            name='time'
                            className='time'
                            value={apptInfo.time}
                            onChange={handleInfoChange}
                        />
                        <input
                            type="date"
                            name='day'
                            value={apptInfo.day}
                            onChange={handleInfoChange}
                        />
                    </div>
                    <div>
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
                    </div>
                </div>
                <div className='checks'>
                    <div className='checkbox-container'>
                        <label>Test Received</label>
                        <input
                            type='checkbox'
                            name='test'
                            checked={appt.test}
                            onChange={handleCheck}
                        />
                    </div>
                    <div className='checkbox-container'>
                        <label>Form Received</label>
                        <input
                            type='checkbox'
                            name='form'
                            checked={appt.form}
                            onChange={handleCheck}
                        />
                    </div>
                </div>
                    <div className='extra-info'>
                        <div className='time'>
                            <p>Time in Class:</p>
                            <input
                                type='number'
                                name='classTime'
                                value={appt.classTime}
                                onChange={handleApptChange}
                            />
                        </div>
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
                    </div>
                    <AllowedChecklist 
                        allowed={allowed}
                        setAllowed={setAllowed}
                    />
                    <div className='notes'>
                        <p>Notes:</p>
                        <textarea 
                            rows="5"
                            cols="33"
                            name="notes"
                            value={appt.notes}
                            onChange={handleApptChange}
                        >
                        </textarea>
                    </div>
                    <div className='after-test'>
                        <p>Proctor:</p>
                        <input
                            type='text'
                            name='proctor'
                            value={appt.proctor}
                            onChange={handleApptChange}
                        />
                    </div>
                    <div className='after-test'>
                        <p>Returned:</p>
                        <input
                            type='text'
                            name='returned'
                            value={appt.returned}
                            onChange={handleApptChange}
                        />
                    </div>
                    <div className='end-btns'>
                        <button onClick={() => {setEditMode(false)}}>Discard Changes</button>
                        <button onClick={handleSubmit}>Save</button>
                    </div>
            </form>
        </div>
    )
}