import './viewport.css'
import { Link, Route, Routes } from 'react-router-dom';
import { ActiveAppt } from '../activeAppt/ActiveAppt';
import { MakeAppt } from '../makeAppt/MakeAppt';
import { AddStudent } from '../addStudent/AddStudent';

export function Viewport() {
    return (
        <div className='viewport'>
            <div className='viewport-tabs'>
                <Link to="/" className='tab'>View Appointment</Link>
                <Link to="/make-appointment" className='tab'>Make Appointment</Link>
                <Link to="/add-student" className='tab'>Add Student</Link>
            </div>
            <div className='viewport-content'>
                <Routes>
                    <Route path="/" element={<ActiveAppt/>}></Route>
                    <Route path="/make-appointment" element={<MakeAppt/>}></Route>
                    <Route path="/add-student" element={<AddStudent/>}></Route>
                </Routes>
            </div>
        </div>
    )
}