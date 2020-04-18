import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Logged from './pages/Logged';
import SeeClients from './pages/SeeClients';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/new-client/:id" component={Logged} />
                <Route path="/list-clients" component={SeeClients} />
            </Switch>
        </BrowserRouter>
    );
}