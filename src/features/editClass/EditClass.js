import { useState } from "react";
import { Section } from "../section/Section"
import './editClass.css';


export function EditClass({ section, editMode, studentInfo, setStudentInfo, setAddClass }) {

    const [edit, setEdit] = useState(editMode);
    const [sectionInfo, setSectionInfo] = useState({
        name: section ? section.name : '',
        professor: section ? section.professor : '',
        days: section ? section.days : [],
        time: section ? section.time : ''
    })

    const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri']

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
                <Section
                    active={false}
                    section={section}
                    edit={true}
                    setEdit={setEdit}
                />
            </div>
            : <div className="edit-class">
                <div className="row text">
                    <input
                        type='text'
                        name='name'
                        value={sectionInfo.name}
                        onChange={handleInfoChange}
                        placeholder="Class"
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
                    <input
                        type='text'
                        name='time'
                        value={sectionInfo.time}
                        onChange={handleInfoChange}
                        placeholder="Time"
                        required
                    />
                </div>
                <div className="row">
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
                </div>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSubmit}>Save</button>
            </div>
            }
        </div>

    )
}