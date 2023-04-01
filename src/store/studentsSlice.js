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
    }
  },
})


export const { addStudent } = studentsSlice.actions

export default studentsSlice.reducer