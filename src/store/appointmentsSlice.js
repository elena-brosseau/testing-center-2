
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
    },
    editAppt: (state, action) => {

      const data = action.payload
      const apptToChange = data.apptToChange;
      const newAppt = data.apptToChange;

      newAppt.date = data.date
      newAppt.student = data.student
      newAppt.section = data.section
      newAppt.allowed = data.allowed
      newAppt.classTime = data.apptInfo.classTime
      newAppt.format = data.apptInfo.format
      newAppt.returnPref = data.apptInfo.returnPref
      newAppt.notes = data.apptInfo.notes
      newAppt.proctor = data.apptInfo.proctor
      newAppt.returned = data.apptInfo.returned

      const newAppointments = [...state.appointments];
      newAppointments[newAppointments.indexOf(apptToChange)] = newAppt;
      newAppointments.sort((a, b) => a.date - b.date);
      state.appointments = newAppointments;

    }
  },
})


export const { addAppt, editAppt } = appointmentsSlice.actions

export default appointmentsSlice.reducer