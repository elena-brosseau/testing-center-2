import { useState } from "react";
import './editClass.css';


export function EditClass({ section, editMode, studentInfo, setStudentInfo, setAddClass }) {

    const [edit, setEdit] = useState(editMode);
    const [sectionInfo, setSectionInfo] = useState({
        name: section ? section.name : '',
        professor: section ? section.professor : '',
        days: section ? section.days : [],
        time: section ? section.time : ''
    })

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    const handleInfoChange = (e) => {
        setSectionInfo({
            ...sectionInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleDaySelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSectionInfo({
            ...sectionInfo,
            days: checked 
                    ? [...sectionInfo.days, value] 
                    : sectionInfo.days.filter((day) => day !== value)
        });
    }

    const handleSubmit = () => {

        const newClasses = [...studentInfo.classes]
        section
        ? newClasses[newClasses.indexOf(section)] = sectionInfo
        : newClasses.push(sectionInfo)

        setStudentInfo({
            ...studentInfo,
            classes: newClasses
        })

        setEdit(false)
        setAddClass(false)
    }

    const handleCancel = () => {
        section
        ? setEdit(false)
        : setAddClass(false)
    }

    return (
        <div>
            {!edit
            ? <div>
                <p>{section.name}</p>
                <p>{section.professor}</p>
                <p>{section.days.join(', ')}</p>
                <p>{section.time}</p>
                <button onClick={() => setEdit(true)}>edit</button>
            </div>
            : <div>
                <input
                    type='text'
                    name='name'
                    value={sectionInfo.name}
                    onChange={handleInfoChange}
                    placeholder="Class Code"
                    required
                />
                <input
                    type='text'
                    name='professor'
                    value={sectionInfo.professor}
                    onChange={handleInfoChange}
                    placeholder="Professor"
                    required
                />
                {weekdays.map((day, index) =>
                    <div key={index}>
                        <input
                            type="checkbox"
                            name="days"
                            value={day}
                            onChange={handleDaySelect}
                            defaultChecked={sectionInfo.days.includes(day)}
                        />
                        <label>{day}</label>
                    </div>
                )}
                <input
                    type='text'
                    name='time'
                    value={sectionInfo.time}
                    onChange={handleInfoChange}
                    placeholder="Time"
                    required
                />
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSubmit}>Save</button>
            </div>
            }
        </div>

    )
}