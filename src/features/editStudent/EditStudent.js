import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { EditClass } from '../editClass/EditClass';
import { addStudent, editStudent } from '../../store/studentsSlice';
import './editStudent.css'

export function EditStudent({ student, setEdit, setStudent }) {

    const students = useSelector((state) => state.students.students)
    const dispatch = useDispatch();

    const [addClass, setAddClass] = useState(false);
    const [studentInfo, setStudentInfo] = useState(student);

    const accommOptions = ['Reader', 'Word Processor', 'Calculator', 'Scantron Assistance', 'Scribe', 'Short Breaks', 'Food and Drink']
    const extraTimeOptions = ['1.5', '2.0', '1.0']

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

        const studentIndex = students.indexOf(student)

        if (studentIndex > -1) {
            dispatch(editStudent({
                studentIndex: studentIndex,
                newStudentInfo: studentInfo
            }))
        } else {
            dispatch(addStudent(studentInfo))
            setStudent(studentInfo)
        }

        setEdit(false)

    }


    return (
        <div>
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
    )
}