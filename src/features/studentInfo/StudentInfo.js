import { useState } from 'react';
import './studentInfo.css'
import { EditStudent } from '../editStudent/EditStudent';


export function StudentInfo({ student }) {

    const [edit, setEdit] = useState(false);

    return (
        <div>
            {!edit
            ? <div>
                <button onClick={() => setEdit(true)}>edit</button>
                <div>
                    <p>{student.name}</p>
                    <p>{student.id}</p>
                    <p>{student.phone}</p>
                </div>
                <div>
                    <p>Accommodations:</p>
                    <ul>
                        {student.accomms.map((accomm, index) =>
                            <li key={index}>{accomm}</li>
                        )}
                        <li>{student.extraTime}</li>
                    </ul>
                </div>
                <div>
                    <p>Classes:</p>
                    {student.classes.map((section, index) => 
                        <div key={index}>
                            <p>{section.name}</p>
                            <p>{section.professor}</p>
                            <p>{section.days.join(', ')}</p>
                            <p>{section.time}</p>
                        </div>
                    )}
                </div>
            </div>
            : <EditStudent
                student={student}
                setEdit={setEdit}
            />
            }
        </div>
    )
}