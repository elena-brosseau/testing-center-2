import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  appointment: null,
}

export const activeAppointmentSlice = createSlice({
  name: 'activeAppointment',
  initialState,
  reducers: {
    setAppt: (state, action) => {
        state.appointment = action.payload
    },
    clearAppt: (state) => {
      state.appointment = null;
    }
  },
})


export const { setAppt, clearAppt } = activeAppointmentSlice.actions

export default activeAppointmentSlice.reducer