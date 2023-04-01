import './viewport.css'
import { Link, Route, Routes } from 'react-router-dom';
import { ActiveAppt } from '../activeAppt/ActiveAppt';
import { MakeAppt } from '../makeAppt/MakeAppt';
import { AddStudent } from '../addStudent/AddStudent';
import { useState } from 'react';

export function Viewport() {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className='viewport'>
            <div className='viewport-tabs'>
                <Link
                    to="/"
                    onClick={() => setActiveTab(1)}
                    className={activeTab == 1 ? 'tab active' : 'tab'}
                >View Appointment</Link>
                <Link
                    to="/make-appointment"
                    onClick={() => setActiveTab(2)}
                    className={activeTab == 2 ? 'tab active' : 'tab'}
                >Make Appointment</Link>
                <Link
                    to="/add-student"
                    onClick={() => setActiveTab(3)}
                    className={activeTab == 3 ? 'tab active' : 'tab'}
                >Add Student</Link>
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