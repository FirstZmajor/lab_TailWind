import * as React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

// router
import { history } from './history'
const NavMenu = React.lazy(() => import('../layout/NevMenu'))
const Profile = React.lazy(() => import('../profile'))

export default () => (
  <>
    <Router history={history}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <NavMenu />
        <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  </>
)
