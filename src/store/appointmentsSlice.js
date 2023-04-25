
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
      const apptToChange = data.appointment;
      const appt = data.appointment;
      
      // convert day/time inputs to date object
      const day = data.data.day.split('-')
      const time = data.data.time.split(':')
      appt.date = new Date(day[0], --day[1], day[2], time[0], time[1])

      appt.student = data.student
      appt.section = data.section
      appt.allowed = data.allowed
      appt.classTime = data.data.classTime
      appt.format = data.data.format
      appt.returnPref = data.data.returnPref
      appt.notes = data.data.notes
      appt.proctor = data.data.proctor
      appt.returned = data.data.returned
      
      const newAppointments = [...state.appointments];
      newAppointments[newAppointments.indexOf(apptToChange)] = appt;
      newAppointments.sort((a, b) => a.date - b.date);
      state.appointments = newAppointments;

    }
  },
})


export const { addAppt, editAppt } = appointmentsSlice.actions

export default appointmentsSlice.reducer