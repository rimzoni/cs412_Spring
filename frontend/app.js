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
import Component150302031 from './components/Component150302031'

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
            <Route location={location} path='/project' exact component={Component150302031} />

            <Route location={location} path='/login' exact component={LoginPage} />
            <Route location={location} path='/signup' exact component={SignupPage} />

            <Route location={location} path='/payment' exact component={StripePaymentPage} />

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
