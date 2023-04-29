import { useState } from 'react';
import './studentInfo.css'
import { EditClass } from '../editClass/EditClass';
import { useDispatch } from 'react-redux';
import { editStudent } from '../../store/studentsSlice';




export function StudentInfo({ student }) {

    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const [addClass, setAddClass] = useState(false);
    const [studentInfo, setStudentInfo] = useState(student);

    const accommOptions = ['Reader', 'Word Processor', 'Calculator', 'Scantron Assistance', 'Scribe', 'Short Breaks', 'Food and Drink']
    const extraTimeOptions = ['1.5', '2.0', '1.0']

    const handleEditClick = () => {
        setEdit(true)
    }

    const handleInfoChange = (e) => {
        setStudentInfo({
            ...studentInfo,
            [e.target.name]: e.target.value,
        })
    }

    const handleAccommSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setStudentInfo({
            ...studentInfo,
            accomms: checked 
                    ? [...studentInfo.accomms, value] 
                    : studentInfo.accomms.filter((accomm) => accomm !== value)
        });
      };

    const handleExtraTimeSelect = (e) => {
        setStudentInfo({
            ...studentInfo,
            extraTime: e.target.checked && e.target.value
        })
    }

    const handleSubmit = () => {
        dispatch(editStudent({
            studentToChange: student,
            newStudentInfo: studentInfo
        }))
        setEdit(false)
    }

    return (
        <div>
            {!edit
            ? <div>
                <button onClick={handleEditClick}>edit</button>
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
            : <div>
                <p>Name:</p>
                <input
                    type='text'
                    name='name'
                    value={studentInfo.name}
                    onChange={handleInfoChange}
                />
                <p>ID:</p>
                <input
                    type='text'
                    name='id'
                    value={studentInfo.id}
                    onChange={handleInfoChange}
                />
                <p>Phone:</p>
                <input
                    type='text'
                    name='phone'
                    value={studentInfo.phone}
                    onChange={handleInfoChange}
                />
                <p>Accommodations:</p>
                {accommOptions.map((accomm, index) => 
                <div key={index} className="checkbox-container">
                    <input
                    type="checkbox"
                    name="accomms"
                    value={accomm}
                    onChange={handleAccommSelect}
                    defaultChecked={student.accomms.includes(accomm)}
                    />
                    <label>{accomm}</label>
                </div>)}
                <p>Extra Time:</p>
                {extraTimeOptions.map((time, index) => 
                <div key={index} className="checkbox-container">
                    <input
                    type="radio"
                    name="extraTime"
                    value={time}
                    onChange={handleExtraTimeSelect}
                    defaultChecked={student.extraTime == time}
                    />
                    <label>{time}</label>
                </div>)}
                <p>Classes:</p>
                {studentInfo.classes.map((section, index) => 
                    <EditClass
                        key={index}
                        section={section}
                        editMode = {false}
                        studentInfo={studentInfo}
                        setStudentInfo={setStudentInfo}
                        setAddClass={setAddClass}
                    />
                )}
                <button onClick={() => setAddClass(true)}>add class</button>
                {addClass 
                && <EditClass
                    section = {null}
                    editMode = {true}
                    studentInfo={studentInfo}
                    setStudentInfo={setStudentInfo}
                    setAddClass={setAddClass}
                />}
                <button onClick={handleSubmit}>SAVE</button>
            </div>
            }
        </div>
    )
}