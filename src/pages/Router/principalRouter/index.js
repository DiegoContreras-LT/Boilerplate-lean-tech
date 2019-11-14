import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import {useDevice} from "../../../Hooks/useDevice";
import {breakPoint} from '../../../env';

import {PrincipalRoutes} from '../'
import Login from '../../auth/login'
import Error404 from '../../errors/404'
import Users from "../../Views/users";
import MUsers from "../../Views/m.users";

const PrincipalRouter = () => {
    const device = useDevice();
    return (
        <Router>
            <Switch>
                <PublicRoute exact path={PrincipalRoutes.Login} component={Login}/>
                <PrivateRoute path={'/'} component={device !== 'phone' ? Users : MUsers}/>
                <PrivateRoute component={() => <Error404 ErrorCode={'404'} ErrorMessage={'Page not found'}/>}/>
            </Switch>
        </Router>
    )
};
export default PrincipalRouter
