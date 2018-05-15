import React from 'react'
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import { resetErrorMessage } from './actions'

import UserGrid from './components/UserGrid'
import UserDetail from './components/UserDetail'
import Dashboard from './components/Dashboard'

import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

import s130303008 from './components/s130303008'


import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  componentWillMount () {
    //call load session
  }

  render () {
    return (
      <BrowserRouter>
        <Route
          render={props => (
            <div>
            <Route location={location} path='/' exact component={Dashboard} />
            <Route location={location} path='/users' exact component={UserGrid} />
            <Route location={location} path='/user/:type/:userId?' exact component={UserDetail} />

            <Route location={location} path='/login' exact component={LoginPage} />
            <Route location={location} path='/signup' exact component={SignupPage} />

            <Route location={location} path='/projectPage' exact component={s130303008} />

            </div>
          )}
        />
      </BrowserRouter>
    )
  }
}

export default connect(
  state => ({
    errorMessage: state.errorMessage,
    user: state.user}),
  { resetErrorMessage: resetErrorMessage}
)(App)
