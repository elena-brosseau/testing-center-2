import { useSelector } from "react-redux";
import './activeAppt.css';
import { useEffect, useState } from "react";
import { EditAppt } from '../editAppt/EditAppt';

export function ActiveAppt({ setActiveTab }) {

    useEffect(() => {
        setActiveTab(1)
      }, [])

    const activeAppt = useSelector((state) => state.activeAppointment.appointment);

    const [editMode, setEditMode] = useState(false);

    const handleEditClick = () => {
        setEditMode(true)
    }

    return (
        <div>
        {editMode
            ? <EditAppt setEditMode={setEditMode}/>
            : <div className="active-appt">
                <div className='active-appt-header'>
                    <h2>Appointment Information</h2>
                    {activeAppt && <button onClick={handleEditClick}>edit</button>}
                </div>
                {activeAppt &&
                    <div className="active-appt-grid">
                        <div>
                            <p>{activeAppt.time()}</p>
                            <p>{activeAppt.day()}</p>
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
                            <p className="student-name">{activeAppt.student.name}</p>
                            <p>{activeAppt.student.id}</p>
                            <p>{activeAppt.student.phone}</p>
                        </div>
                        <div className="left">
                            <p className="title">Acommodations:</p>
                            <ul>
                                {activeAppt.student.accomms.map((accomm, index) =>
                                    <li key={index}>{accomm}</li>
                                )}
                                <li>{activeAppt.student.extraTime}</li>
                            </ul>
                        </div>
                        <div className="appt-class">
                            <p>{activeAppt.section.name} / {activeAppt.section.professor}</p>
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
                                    <p>{activeAppt.totalTime()}</p>
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