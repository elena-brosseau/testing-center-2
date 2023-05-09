import { useSelector } from "react-redux";
import './activeAppt.css';
import editIcon from '../../assets/edit-text.png'
import { useEffect, useState } from "react";
import { EditAppt } from '../editAppt/EditAppt';
import { getISODay, getISOTime, totalTime } from "../../utils/appointment";

export function ActiveAppt({ setActiveTab }) {

    useEffect(() => {
        setActiveTab(1)
      }, [])

    const activeAppt = useSelector((state) => state.activeAppointment.appointment);
    const students = useSelector((state) => state.students.students)

    const student = activeAppt && students.find(student => student.key === activeAppt.student);
    const section = activeAppt && student.classes.find(section => section.name === activeAppt.section.name)
    
    const [editMode, setEditMode] = useState(false);


    return (
        <div>
        {editMode
            ? <EditAppt setEditMode={setEditMode}/>
            : <div className="active-appt">
                <div className='active-appt-header'>
                    <h2>Appointment Information</h2>
                    {activeAppt 
                    && <button onClick={() => {setEditMode(true)}}>
                            <img src={editIcon}/>
                        </button>}
                </div>
                {activeAppt &&
                    <div className="active-appt-grid">
                        <div>
                            <p>{getISOTime(activeAppt.date)}</p>
                            <p>{getISODay(activeAppt.date)}</p>
                        </div>
                        <div className="left">
                            {
                                activeAppt.format
                                ? <p>Test Received</p>
                                : <p>Test Pending</p>
                            }
                            {
                                activeAppt.classTime
                                ? <p>Form Received</p>
                                : <p>Form Pending</p>
                            }
                        </div>
                        <div className='student-info'>
                            <p className="student-name">{student.name}</p>
                            <p>{student.id}</p>
                            <p>{student.phone}</p>
                        </div>
                        <div className="left">
                            <p className="title">Acommodations:</p>
                            <ul>
                                {student.accomms.map((accomm, index) =>
                                    <li key={index}>{accomm}</li>
                                )}
                                <li>{student.extraTime}</li>
                            </ul>
                        </div>
                        <div className="appt-class">
                            <p>{section.name} / {section.professor}</p>
                        </div>
                        {
                            (activeAppt.format || activeAppt.classTime)
                            ? <div className="active-appt-grid lower">
                                <div>
                                    <p className="title">Allowed Materials:</p>
                                    <ul>
                                        {activeAppt.allowed.map((material, index) =>
                                            <li key={index}>{material}</li>
                                        )}
                                    </ul>
                                </div>
                                <div className="time-info left">
                                    <p>Time in Class:</p>
                                    <p>{activeAppt.classTime}</p>
                                    <p>Total Time:</p>
                                    <p>{totalTime(activeAppt.classTime, student.extraTime)}</p>
                                </div>
                                <div>
                                    <p>Test Format: {activeAppt.format}</p>
                                    <p>Return Preference: {activeAppt.returnPref}</p>
                                </div>
                            </div>
                            : <p></p>
                        }
                        <div className="appt-notes">
                            <p>Notes:</p>
                            <p className="notes-content">{activeAppt.notes}</p>
                        </div>
                        <div>
                            <p>Proctor: {activeAppt.proctor}</p>
                        </div>
                        <div className="left">
                            <p>Returned: {activeAppt.returned}</p>
                        </div>
                    </div>
                }
            </div>}
        </div>
        
    )
}