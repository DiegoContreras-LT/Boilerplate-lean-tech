import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ContentRoutes } from '../'

// web routes
import Users from '../../Views/users'
import Error404 from '../../errors/404'

// mobile routes
import MUsers from '../../Views/m.users'

class ContentRouter extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path={'/'} component={Users} />
        <Route
          path={ContentRoutes.Users}
          component={
            this.props.device === 'UNSET' ? null : this.props.device === 'desktop' ? Users : MUsers
          }
        />
        <Route component={() => <Error404 ErrorCode={'404'} ErrorMessage={'Page not found'} />} />
      </Switch>
    )
  }
}

export default ContentRouter
