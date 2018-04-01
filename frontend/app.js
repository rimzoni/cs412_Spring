import React from 'react'
import ReactDOM from 'react-dom'

import s140302148Grid from './components/s140302148Grid'
import Header from './components/Header'


import { BrowserRouter, Route } from 'react-router-dom'

const router = (
  <BrowserRouter>
    <Route
      render={props => (
          <div>
          <Route location={location} path='/' exact component={Header} />
          <Route location={location} path='/departments' exact component={s140302148Grid} />
          
          </div>
        )}
    />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('app'))
