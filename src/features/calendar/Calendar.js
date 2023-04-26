
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { nextFiveDates } from "../../utils/nextFiveDates";
import { CalendarAppt } from "../calendarAppt/CalendarAppt";
import './calendar.css'
import { v4 as uuid } from 'uuid';
import { Link } from "react-router-dom";
import { setDate } from "../../store/firstCalendarDateSlice";
import { setAppt } from "../../store/activeAppointmentSlice";

export function Calendar() {

    const firstDate = useSelector((state) => state.firstCalendarDate.date);
    const activeAppt = useSelector((state) => state.activeAppointment.appointment)
    const appointments = useSelector((state) => state.appointments.appointments);
    const dispatch = useDispatch()

    // checks whether to reset active appointment
    const includesActiveAppt = (date) => {
        
        if (!activeAppt) {
            return true;
        } else {
            return nextFiveDates(date, appointments).find(day => day.date.toDateString() === activeAppt.date.toDateString())
        }
    }

    const handlePrevClick = () => {
        const newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() - 7)
        dispatch(setDate(newDate))
        dispatch(setAppt(null))
    }

    const handleNextClick = () => {
        const newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + 7)
        dispatch(setDate(newDate))
        dispatch(setAppt(null))
    }

    const handleTodayClick = () => {
        dispatch(setDate(new Date()))
        !includesActiveAppt(new Date()) && dispatch(setAppt(null))
    }

    const [datePicker, setDatePicker] = useState('');

    const handleDateChange = (e) => {
        setDatePicker(e.target.value)
      }
    
      const handleDateSubmit = (e) => {
        e.preventDefault();
        const dateArr = datePicker.split('-');
        const newDate = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
        dispatch(setDate(newDate))
        !includesActiveAppt(newDate) && dispatch(setAppt(null))
        setDatePicker('');
      }


    return (
        <div id="calendar-container">
            <div id="calendar-head">
                <button className="prev-week" onClick={handlePrevClick}>Prev</button>
                <button className="next-week" onClick={handleNextClick}>Next</button>
                <button onClick={handleTodayClick}>Today</button>
                <form>
                    <input type="date" value={datePicker} onChange={handleDateChange} />
                    <input type="submit" onClick={handleDateSubmit} hidden/>
                </form>
            </div>
            <div id="appt-list">
                {nextFiveDates(firstDate, appointments).map((date) => 
                    <div key={uuid()} className='day'>
                        <h2>{date.date.toDateString()}</h2>
                        {date.appts.map((appt) => 
                        <Link to='/' key={uuid()}>
                            <CalendarAppt 
                                appt={appt}
                            />
                        </Link>
                        )}
                    </div>)}
            </div>
        </div>
        )
}