import React from 'react';
import {Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../../pages/Auth/Login';


const Routes = () => (
    <Switch>
        <PrivateRoute path={'/'} component={Login}/>
    </Switch>
);

export default Routes;
