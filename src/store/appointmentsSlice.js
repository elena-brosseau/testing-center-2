
import { createSlice } from '@reduxjs/toolkit'
import { appointments } from '../utils/appointmentsPreload'

const initialState = {
  appointments: appointments.sort((a, b) => a.date - b.date),
}

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppt: (state, action) => {
        state.appointments.push(action.payload);
        state.appointments.sort((a, b) => a.date - b.date);
    }
  },
})


export const { addAppt } = appointmentsSlice.actions

export default appointmentsSlice.reducer