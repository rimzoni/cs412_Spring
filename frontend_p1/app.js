import React from 'react'
import ReactDOM from 'react-dom'

import Grid150302023 from './components/Grid150302023'
import Dashboard from './components/Dashboard'

import { BrowserRouter, Route } from 'react-router-dom'

const router = (
  <BrowserRouter>
    <Route
      render={props => (
          <div>
          <Route location={location} path='/' exact component={Dashboard} />
          <Route location={location} path='/departments' exact component={Grid150302023} />
         </div>
        )}
    />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('app'))
