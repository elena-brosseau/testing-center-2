import { useEffect, useState } from "react"
import './students.css'
import addIcon from '../../assets/add.png';
import { useDispatch, useSelector } from "react-redux"
import { setActiveAppt } from '../../store/activeAppointmentSlice'
import { v4 as uuid } from 'uuid'
import { StudentInfo } from "../studentInfo/StudentInfo"
import { AddStudent } from "../addStudent/AddStudent"


export function Students({ setActiveTab }) {

    const students = useSelector((state) => state.students.students)
    const dispatch = useDispatch()

    useEffect(() => {
      setActiveTab(3)
      dispatch(setActiveAppt(null))
    }, [setActiveTab, dispatch])

    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)
    const [lookupStudent, setLookupStudent] = useState('')

    const searchBar = (add || edit) ? false : true

    const lookupStudentObj = students.find(student => student.name === lookupStudent)


    const handleLookupChange = (e) => {
        setLookupStudent(e.target.value)
    }


    return (
        <div className="students-content">
            {searchBar
            && <div className="student-lookup">
                <input
                    list='students'
                    name='student'
                    value={lookupStudent}
                    onChange={handleLookupChange}
                    placeholder="Student Search"
                />
                <datalist id='students'>
                    {students.map(student => <option key={uuid()}>{student.name}</option>)}
                </datalist>
                <button onClick={() => {setAdd(true)}}>
                    <img
                        src={addIcon}
                        alt="Add Student"
                    />
                </button>
            </div>}
            {add
            ? <div>
                <AddStudent
                    name={lookupStudent}
                    setAdd={setAdd}
                    setLookupStudent={setLookupStudent}
                />
              </div>
            : <div>
                {lookupStudentObj 
                && <StudentInfo
                        student={lookupStudentObj}
                        setSearch={setLookupStudent}
                        edit={edit}
                        setEdit={setEdit}
                    />}
              </div>}
        </div>

    )
}