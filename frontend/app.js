import React from 'react'
import ReactDOM from 'react-dom'

//import UserGrid from './components/UserGrid'
//import UserDetail from './components/UserDetail'
import Dashboard from './components/Dashboard'
import _992138Grid from './components/_992138Grid'

import { BrowserRouter, Route } from 'react-router-dom'

const router = (
  <BrowserRouter>
    <Route
      render={props => (
          <div>
          <Route location={location} path='/' exact component={Dashboard} />
          <Route location={location} path='/departments' exact component={_992138Grid} />
          </div>
        )}
    />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('app'))
