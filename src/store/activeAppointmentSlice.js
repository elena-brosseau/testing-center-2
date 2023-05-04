import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  appointment: null,
}

export const activeAppointmentSlice = createSlice({
  name: 'activeAppointment',
  initialState,
  reducers: {
    setActiveAppt: (state, action) => {
        state.appointment = action.payload
    }
  },
})


export const { setActiveAppt } = activeAppointmentSlice.actions

export default activeAppointmentSlice.reducer