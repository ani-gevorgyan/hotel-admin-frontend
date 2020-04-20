import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
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
                    <Route exact path="/" render={() => token && token !== 'none' ? <Redirect to={'/dashboard'} /> : (<SignIn />)}  />
                    <Route path="/dashboard" render={() => token && token !== 'none' ? (<AdminDashboard />) : <Redirect to={'/'} />} />
                    <Route path="/create-hotel" render={() => token && token !== 'none' ? (<CreateHotel />) : <Redirect to={'/'} />} />
                </Switch>
            </Router>
        </>
    )
}
