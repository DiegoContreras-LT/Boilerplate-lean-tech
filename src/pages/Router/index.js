import React from 'react';
import {Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Login = () => (<h1>LOGIN</h1>);
const Dashboard = () =>(<h1>DASHBOARD</h1>);

const Routes = () => (
    <Switch>
        <PublicRoute path={'/login'} component={Login}/>
        <PrivateRoute exact path={'/'} component={Dashboard}/>
    </Switch>
);

export default Routes;
