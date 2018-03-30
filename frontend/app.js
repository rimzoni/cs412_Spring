import React from 'react'
import ReactDOM from 'react-dom'
import _992450Grid from './components/_992450Grid'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route } from 'react-router-dom'

const router = (
  <BrowserRouter>
    <Route
      render={props => (
          <div>
          <Route location={location} path='/' exact component={Dashboard} />
          <Route location={location} path='/department' exact component={_992450Grid} />
          </div>
        )}
    />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('app'))
