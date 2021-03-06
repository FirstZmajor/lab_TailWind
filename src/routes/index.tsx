import * as React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import AppRouter from './AppRouter'
// router
import { history } from './history'
const HomePage = React.lazy(() => import('../home/homePage'))

export default () => (
  <>
    <Router history={history}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <AppRouter />
        </Switch>
      </React.Suspense>
    </Router>
  </>
)
