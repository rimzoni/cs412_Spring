import React from 'react'
import ReactDOM from 'react-dom'
import _140302097Grid from './components/_140302097Grid'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route } from 'react-router-dom'

const router = (
  <BrowserRouter>
    <Route
      render={props => (
          <div>
          <Route location={location} path='/' exact component={Dashboard} />
          <Route location={location} path='/departments' exact component={_140302097Grid} />
          </div>
        )}
    />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('app'))
