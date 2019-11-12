import React, {Suspense} from 'react';
import {Switch, Route} from "react-router-dom";

import Login from '../auth/login';

const Routes = () => (
    <Switch>
        <Suspense>
            <Route exact path="/" component={Login}></Route>
        </Suspense>
    </Switch>
)

export default Routes;