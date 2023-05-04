
import { createSlice } from '@reduxjs/toolkit'
import { appointments } from '../utils/appointmentsPreload'

const initialState = {
  appointments: appointments.sort((a, b) => a.date.localeCompare(b.date)),
}

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppt: (state, action) => {
        state.appointments.push(action.payload);
        state.appointments.sort((a, b) => a.date - b.date);
    },
    editAppt: (state, action) => {

      const {apptIndex, newAppt} = action.payload;

      const newAppointments = [...state.appointments]
      newAppointments[apptIndex] = newAppt

      state.appointments = newAppointments
    }
  },
})


export const { addAppt, editAppt } = appointmentsSlice.actions

export default appointmentsSlice.reducer