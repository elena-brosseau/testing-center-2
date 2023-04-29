import { createSlice } from '@reduxjs/toolkit'
import { students } from '../utils/studentsPreload'
import { Student } from '../utils/student'

const initialState = {
  students: students,
}

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
        state.students.push(action.payload)
    },
    editStudent: (state, action) => {

      const newStudents = state.students
      const studentToChange = action.payload.studentToChange
      const newStudentInfo = action.payload.newStudentInfo
      const index = newStudents.indexOf(studentToChange)

      studentToChange.name = newStudentInfo.name
      studentToChange.id = newStudentInfo.id
      studentToChange.phone = newStudentInfo.phone
      studentToChange.accomms = newStudentInfo.accomms
      studentToChange.extraTime = newStudentInfo.extraTime


      newStudents[index] = studentToChange;
      newStudents[index].classes = newStudentInfo.classes

      state.students = newStudents;

    }
  },
})


export const { addStudent, editStudent } = studentsSlice.actions

export default studentsSlice.reducer