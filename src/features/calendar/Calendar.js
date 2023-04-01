
import { useState } from "react";
import { useSelector } from 'react-redux'
import { nextFiveDates } from "../../utils/nextFiveDates";
import { CalendarAppt } from "../calendarAppt/CalendarAppt";
import './calendar.css'
import { v4 as uuid } from 'uuid';

export function Calendar() {

    const [firstDate, setFirstDate] = useState(new Date());
    const appointments = useSelector((state) => state.appointments.appointments);

    const [selected, setSelected] = useState(null);

    const handlePrevClick = () => {
        const newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() - 7)
        setFirstDate(newDate);
    }

    const handleNextClick = () => {
        const newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + 7)
        setFirstDate(newDate);
    }

    const handleTodayClick = () => {
        setFirstDate(new Date());
    }

    const [datePicker, setDatePicker] = useState('');

    const handleDateChange = (e) => {
        setDatePicker(e.target.value)
      }
    
      const handleDateSubmit = (e) => {
        e.preventDefault();
        const dateArr = datePicker.split('-');
        const newDate = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
        setFirstDate(newDate);
        setDatePicker('');
      }

      console.log(uuid())


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
                            <CalendarAppt 
                                key={uuid()}
                                id={uuid()}
                                appt={appt}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        )}
                    </div>)}
            </div>
        </div>
        )
}