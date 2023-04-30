import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  date: new Date().toISOString(),
}

export const firstCalendarDateSlice = createSlice({
  name: 'firstCalendarDate',
  initialState,
  reducers: {
    setDate: (state, action) => {
        state.date = action.payload
    }
  },
})


export const { setDate } = firstCalendarDateSlice.actions

export default firstCalendarDateSlice.reducer