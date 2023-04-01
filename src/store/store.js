import { configureStore } from '@reduxjs/toolkit'
import appointmentsReducer from './appointmentsSlice'
import studentsReducer from './studentsSlice'
import activeAppointmentReducer from './activeAppointmentSlice'

export const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    students: studentsReducer,
    activeAppointment: activeAppointmentReducer
  },
})