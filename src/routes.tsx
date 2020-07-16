import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Absences from './pages/Absences';
import CalendarPage from './pages/CalendarPage';

import NavBar from './components/Navbar';

const Routes = (children: any) => {
    return (
        <BrowserRouter>
            <NavBar />
            <Route component={Absences} path="/" exact/>
            <Route component={CalendarPage} path="/calendar" />
            <Route component={Absences} path="/absence" />
        </BrowserRouter>
    )
}

export default Routes;