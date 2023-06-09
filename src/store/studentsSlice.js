import { createSlice } from '@reduxjs/toolkit'
import { students } from '../utils/studentsPreload'

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

      const {studentIndex, newStudentInfo} = action.payload

      const newStudents = [...state.students]
      newStudents[studentIndex] = newStudentInfo

      state.students = newStudents;
    }
  },
})


export const { addStudent, editStudent } = studentsSlice.actions

export default studentsSlice.reducer