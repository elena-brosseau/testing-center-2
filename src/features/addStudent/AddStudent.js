import { useState } from 'react'
import './addStudent.css'
import { EditStudent } from '../editStudent/EditStudent'
import { Student } from '../../utils/student'
import { Link } from 'react-router-dom'

export function AddStudent({ setAdd, setLookup, setLookupStudent}) {

    const [student, setStudent] = useState(new Student('', '', '', '', ''))
    const [edit, setEdit] = useState(true)

    const handleDetailsClick = () => {
        setAdd(false)
        setLookup(true)
        setLookupStudent(student.name)
    }

    const resetForm = () => {
        setStudent(new Student('', '', '', '', ''))
        setEdit(true)
    }

    return (
        <div>
            {edit
            ? <EditStudent
                student={student}
                setEdit={setEdit}
                setStudent={setStudent}
            />
            : <div>
                <p>Student Added:</p>
                <p>{student.name}</p>
                <p>{student.id}</p>
                <button onClick={handleDetailsClick}>View Details</button>
                <button onClick={resetForm}>Add Another Student</button>
            </div>
            }
        </div>
    )
}