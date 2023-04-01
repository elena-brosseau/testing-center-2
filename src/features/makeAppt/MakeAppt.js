import React, { useState } from 'react';
import './makeAppt.css';



export function MakeAppt() {
  
  const [student, setStudent] = useState(null)

  const [appointment, setAppointment] = useState(null);


  return  (
              <form id='appt-form'>
                <input
                    type='text'
                    id='student-name'
                    placeholder='Student Search'
                />

                  <div>
                    <p>Appointment Date</p>
                    <input
                        type='date'
                        id='appt-date'
                    />
                    <p>Appointment Time</p>
                    <input
                        type='time'
                        id='appt-time'
                    />
                  </div>
                

              </form>
  )
}



// export function MakeAppt() {
//     return (
//         <div>
//             <h1>Make Appointment</h1>
//         </div>
//     )
// }