import './viewport.css'
import { Link, Route, Routes } from 'react-router-dom';
import { ActiveAppt } from '../activeAppt/ActiveAppt';
import { MakeAppt } from '../makeAppt/MakeAppt';
import { Students } from '../students/Students';
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
                    to="/students"
                    className={activeTab == 3 ? 'tab active' : 'tab'}
                >Students</Link>
            </div>
            <div className='viewport-page'>
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
                            path="/students"
                            element={<Students setActiveTab={setActiveTab}/>}
                        ></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}