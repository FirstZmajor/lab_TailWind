import * as React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

// router
import { history } from './history'

const NavMenu = React.lazy(() => import('../layout/NevMenu'))
const Profile = React.lazy(() => import('../profile'))
const HomePage = React.lazy(() => import('../home/homePage'))

export default () => (
  <>
    <Router history={history}>
      <NavMenu />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  </>
)
