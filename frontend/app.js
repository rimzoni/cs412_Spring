import React from 'react'
import ReactDOM from 'react-dom'

import grid from './components/140302228_Grid'
import depDetail from './components/depDetail'
import Dashboard from './components/Dashboard'

import { BrowserRouter, Route } from 'react-router-dom'



const router = (
  <BrowserRouter>
    <Route
      render={props => (
          <div>
          <Route location={location} path='/' exact component={Dashboard} />
          <Route location={location} path='/departments' exact component={grid} />
          <Route location={location} path='/department/:departmentId' exact component={depDetail} />

          </div>
        )}
    />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('app'))
