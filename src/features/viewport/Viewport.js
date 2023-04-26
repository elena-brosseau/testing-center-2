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
                    className={activeTab == 1 ? 'tab active' : 'tab'}
                >View Appointment</Link>
                <Link
                    to="/make-appointment"
                    className={activeTab == 2 ? 'tab active' : 'tab'}
                >Make Appointment</Link>
                <Link
                    to="/add-student"
                    className={activeTab == 3 ? 'tab active' : 'tab'}
                >Add Student</Link>
            </div>
            <div className='viewport-content'>
                <Routes>
                    <Route
                        path="/"
                        element={<ActiveAppt setActiveTab={setActiveTab}/>}
                    ></Route>
                    <Route 
                        path="/make-appointment"
                        element={<MakeAppt setActiveTab={setActiveTab}/>}
                    ></Route>
                    <Route
                        path="/add-student"
                        element={<AddStudent setActiveTab={setActiveTab}/>}
                    ></Route>
                </Routes>
            </div>
        </div>
    )
}