import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom'
import SignIn from '../pages/adminLogin/adminLogin';
import AdminDashboard from '../pages/adminDashboard/adminDashboard';
import CreateHotel from '../pages/createHotel/createHotel';

import history from './history';
export default function Routes() {
    return (
        <>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/dashboard" component={AdminDashboard} />
                    <Route path="/create-hotel" component={CreateHotel} />
                </Switch>
            </Router>
        </>
    )
}
