import { useState } from 'react';
import editIcon from '../../assets/edit-text.png'
import './studentInfo.css'
import { EditStudent } from '../editStudent/EditStudent';
import { Section } from '../section/Section';


export function StudentInfo({ student, setSearch, edit, setEdit }) {

    return (
        <div>
            {!edit
            ? <div>
                <div className='student-info-grid'>
                    <div className='student-info'>
                        <div className='student-info-edit-btn'>
                            <p className="student-name">{student.name}</p>
                            <button 
                                onClick={() => {setEdit(true)}}
                            >
                                <img
                                    src={editIcon}
                                />
                            </button>
                        </div>
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
                    <p className='classes-title'>Classes:</p>
                    <div className='classes'>
                        {student.classes.map((section, index) => 
                            <Section
                                key={index}
                                section={section}
                                active={false}
                            />
                        )}
                    </div>
                </div>
            </div>
            : <EditStudent
                student={student}
                discard={() => setEdit(false)}
                setEdit={setEdit}
                setSearch={setSearch}
            />
            }
        </div>
    )
}