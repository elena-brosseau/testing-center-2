import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { EditClass } from '../editClass/EditClass';
import { addStudent, editStudent } from '../../store/studentsSlice';
import addIcon from '../../assets/add.png'
import './editStudent.css'

export function EditStudent({ student, discard, setEdit, setSearch, setStudent }) {

    const students = useSelector((state) => state.students.students)
    const dispatch = useDispatch();

    const [addClass, setAddClass] = useState(false);
    const [studentInfo, setStudentInfo] = useState(student);

    const accommOptions = ['Reader', 'Word Processor', 'Calculator', 'Scantron Assistance', 'Scribe', 'Short Breaks']
    const extraTimeOptions = ['1.0', '1.5', '2.0']

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
        setSearch && setSearch(studentInfo.name)

    }


    return (
        <div>
            <div className='active-appt-header'>
                <h2>Edit Student</h2>
            </div>
            <div className='edit-student-form'>
                <div className='edit-student-info'>
                    <p>Student Name:</p>
                    <input
                        type='text'
                        name='name'
                        value={studentInfo.name}
                        onChange={handleInfoChange}
                    />
                    <p>Student ID:</p>
                    <input
                        type='text'
                        name='id'
                        value={studentInfo.id}
                        onChange={handleInfoChange}
                    />
                    <p>Student Phone:</p>
                    <input
                        type='text'
                        name='phone'
                        value={studentInfo.phone}
                        onChange={handleInfoChange}
                    />
                </div>
                <div className='edit-accomms'>
                    <p>Accommodations:</p>
                    <div className='accomm-options'>
                        {accommOptions.map((accomm, index) => 
                        <div key={index} className="checkbox-container">
                            <label>{accomm}</label>
                            <input
                            type="checkbox"
                            name="accomms"
                            value={accomm}
                            onChange={handleAccommSelect}
                            defaultChecked={student.accomms.includes(accomm)}
                            />
                        </div>)}
                    </div>
                    <p className='extra'>Extra Time:</p>
                    <div className='extra-options'>
                        {extraTimeOptions.map((time, index) => 
                        <div key={index} className="checkbox-container">
                            <input
                            type="radio"
                            name="extraTime"
                            value={time}
                            onChange={handleExtraTimeSelect}
                            defaultChecked={student.extraTime === time}
                            />
                            <label>{time}</label>
                        </div>)}
                    </div> 
                </div>
                <div className='edit-classes'>
                    <div className='title'>
                    <p>Classes</p>
                    <button 
                        onClick={() => setAddClass(true)}
                        className='addClassBtn'
                    >
                        <img src={addIcon} alt='add icon' />

                    </button>
                    </div>
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
                    {addClass 
                    && <EditClass
                        section = {null}
                        editMode = {true}
                        studentInfo={studentInfo}
                        setStudentInfo={setStudentInfo}
                        setAddClass={setAddClass}
                    />}
                </div>
                <div className='end-btns'>
                    <button onClick={discard}>Discard Changes</button>
                    <button onClick={handleSubmit}>Save</button>
                </div>
                </div>
        </div>
        
    )
}