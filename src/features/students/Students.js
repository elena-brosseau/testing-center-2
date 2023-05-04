import { useEffect, useState } from "react"
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
    }, [])

    const [add, setAdd] = useState(false)
    const [lookup, setLookup] = useState(false)
    const [lookupStudent, setLookupStudent] = useState('')

    const lookupStudentObj = students.find(student => student.name === lookupStudent)

    const handleAddClick = () => {
        setAdd(add ? false : true)
    }

    const handleLookupClick = () => {
        setLookup(lookup ? false : true)
    }

    const handleLookupChange = (e) => {
        setLookupStudent(e.target.value)
    }


    return (
        <div>
            {add
            ? <div>
                <button onClick={handleAddClick}>Back</button>
                <AddStudent
                    setAdd={setAdd}
                    setLookup={setLookup}
                    setLookupStudent={setLookupStudent}
                />
              </div>
            : lookup
            ? <div>
                <button onClick={handleLookupClick}>Back</button>
                <p>lookup</p>
                <input
                    list='students'
                    name='student'
                    value={lookupStudent}
                    onChange={handleLookupChange}
                />
                <datalist id='students'>
                    {students.map(student => <option key={uuid()}>{student.name}</option>)}
                </datalist>
                {lookupStudentObj && <StudentInfo student={lookupStudentObj} />}
              </div>
            : <div>
                <h1>Students</h1>
                <button onClick={handleAddClick}>Add Student</button>
                <button onClick={handleLookupClick}>Lookup Student</button>
              </div>}
        </div>

    )
}