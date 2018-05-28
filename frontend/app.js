import React from 'react'
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import { resetErrorMessage } from './actions'

import UserGrid from './components/UserGrid'
import UserDetail from './components/UserDetail'
import Dashboard from './components/Dashboard'
import Custom from './components/Custom'
import TasksComponent from './components/Tasks'
import TaskDetail from './components/TaskDetail'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import o150302075Component from './components/o150302075Component'
import StripePaymentPage from './components/StripePaymentPage'

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

            <Route location={location} path='/custom' exact component={Custom} />
            <Route location={location} path='/tasks' exact component={TasksComponent} />
            <Route location={location} path='/task/:taskId' exact component={TaskDetail} />

            <Route location={location} path='/login' exact component={LoginPage} />
            <Route location={location} path='/signup' exact component={SignupPage} />

            <Route location={location} path='/payment' exact component={StripePaymentPage} />
            <Route location={location} path='/o150302075Component' exact component={o150302075Component} />

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
