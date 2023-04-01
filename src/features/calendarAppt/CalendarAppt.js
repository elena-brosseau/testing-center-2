
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAppt } from '../../store/activeAppointmentSlice';
import checkMark from '../../assets/check-mark.png';
import './calendarAppt.css'

export function CalendarAppt (props) {

    const dispatch = useDispatch();

    const appt = props.appt;
    const pending = appt.checks() < 2;

    const handleClick = (e) => {
        dispatch(setAppt(appt));
        props.setSelected(props.id)
    }

    return (

        <div className="appt-container">
            <div 
                className={props.selected == props.id ? "appt selected" : "appt"}
                onClick={(handleClick)}
                style={{backgroundColor: pending ? '#fff2b3' : '#d6f2bd'}}
            >
                <div className="appt-content">
                    <div className="appt-content-left">
                        <div className="appt-head">
                            <span className="time">{appt.time()} - </span>
                            <span className="student-name">{appt.student.name}</span>
                        </div>
                        <div className="appt-subhead">
                            <span className="section">{appt.section.name} // </span>
                            <span className="prof">{appt.section.professor}</span>
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