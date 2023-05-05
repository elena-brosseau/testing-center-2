import { useState } from 'react'
import './addStudent.css'
import { EditStudent } from '../editStudent/EditStudent'

export function AddStudent({ name, setAdd, setLookupStudent}) {

    const [student, setStudent] = useState({
        name: name,
        accomms: [],
        classes: []
    })
    const [edit, setEdit] = useState(true)

    const handleDetailsClick = () => {
        setAdd(false)
        setLookupStudent(student.name)
    }

    const resetForm = () => {
        setStudent({
            accomms: [],
            classes: []
        })
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