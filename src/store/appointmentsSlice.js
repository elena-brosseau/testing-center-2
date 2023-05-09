
import { createSlice } from '@reduxjs/toolkit'
import { appointments } from '../utils/appointmentsPreload'

function sort(arr) {
  return arr.sort((a, b) => a.date.localeCompare(b.date));
}

const initialState = {
  appointments: sort(appointments),
}

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppt: (state, action) => {
        state.appointments.push(action.payload);
        sort(state.appointments)
    },
    editAppt: (state, action) => {

      const {apptIndex, newAppt} = action.payload;

      const newAppointments = [...state.appointments]
      newAppointments[apptIndex] = newAppt

      state.appointments = newAppointments
      sort(state.appointments)
    }
  },
})


export const { addAppt, editAppt } = appointmentsSlice.actions

export default appointmentsSlice.reducer