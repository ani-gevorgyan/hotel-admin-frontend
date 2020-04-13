import React, { useEffect } from 'react';
import { Router, Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom'
import SignIn from '../pages/adminLogin/adminLogin';
import AdminDashboard from '../pages/adminDashboard/adminDashboard';
import CreateHotel from '../pages/createHotel/createHotel';

import history from './history';
export default function Routes() {
    const token = localStorage.getItem('token');
    return (
        <>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/dashboard" render={() => token ? (<AdminDashboard />) : null} />
                    <Route path="/create-hotel" component={CreateHotel} />
                </Switch>
            </Router>
        </>
    )
}
