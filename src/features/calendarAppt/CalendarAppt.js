
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAppt } from '../../store/activeAppointmentSlice';
import checkMark from '../../assets/check-mark.png';
import './calendarAppt.css'

export function CalendarAppt (props) {

    const activeAppt = useSelector((state) => state.activeAppointment.appointment)
    const students = useSelector((state) => state.students.students)
    const dispatch = useDispatch();

    const appt = props.appt;
    const pending = appt.checks() < 2;

    const student = students.find(student => student.key === appt.student);
    const section = student.classes.find(section => section.name === appt.section.name)

    const handleClick = () => {
        dispatch(setAppt(appt));
    }

    return (

        <div className="appt-container">
            <div 
                className={activeAppt == appt ? "appt selected" : "appt"}
                onClick={(handleClick)}
                style={{backgroundColor: pending ? '#fff2b3' : '#d6f2bd'}}
            >
                <div className="appt-content">
                    <div className="appt-content-left">
                        <div className="appt-head">
                            <span className="time">{appt.time()} - </span>
                            <span className="student-name">{student.name}</span>
                        </div>
                        <div className="appt-subhead">
                            <span className="section">{section.name} // </span>
                            <span className="prof">{section.professor}</span>
                        </div>
                    </div>
                    <div className="checks">
                        {appt.checks() 
                        ? new Array(appt.checks()).fill(null).map((check, index) => 
                            <img src={checkMark} alt="check mark" key={index} />
                        )
                        : <p>Pending</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}