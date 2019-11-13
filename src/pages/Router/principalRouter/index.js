import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PrincipalRoutes } from '../'
import Screens from './../../'
import Login from '../../Auth/login'
import Error404 from '../../Errors/404'

class PrincipalRouter extends React.Component {

  render () {
    return (
        <Router>
          <Switch>
            <Route exact path={PrincipalRoutes.Login} component={Login} />
            <Route path={PrincipalRoutes.Screens} component={Screens} />
            <Route component={() => <Error404 ErrorCode={'404'} ErrorMessage={'Page not found'} />} />
          </Switch>
        </Router>
    )
  }
}
export default PrincipalRouter
