import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// router
import { history } from './history'

// const HomePage = React.lazy(() => import('../home/homePage'))
import NavMenu from '../layout/NevMenu'
import HomePage from '../home/homePage'
import Profile from '../profile'

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
