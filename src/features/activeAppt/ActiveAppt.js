import { useSelector } from "react-redux";
import './activeAppt.css';

export function ActiveAppt() {

    const activeAppt = useSelector((state) => state.activeAppointment.appointment);

    return (
        <div>
            {activeAppt &&
                <div id="active-appt-grid">
                    <div>
                        <p>{activeAppt.time()}</p>
                        <p>{activeAppt.day()}</p>
                    </div>
                    <div className="left">
                        <p>Test Received</p>
                        <p>Form Received</p>
                    </div>
                    <div className='student-info'>
                        <p className="student-name">{activeAppt.student.name}</p>
                        <p>{activeAppt.student.id}</p>
                        <p>{activeAppt.student.phone}</p>
                    </div>
                    <div className="left">
                        <p>Acommodations:</p>
                        <ul>
                            {activeAppt.student.accomms.map((accomm, index) =>
                                <li key={index}>{accomm}</li>
                            )}
                        </ul>
                    </div>
                    <div className="appt-class">
                        <p>{activeAppt.section.name} / {activeAppt.section.professor}</p>
                    </div>
                    <div>
                        <p>Allowed Materials:</p>
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
        </div>
    )
}