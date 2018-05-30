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

import StripePaymentPage from './components/StripePaymentPage'

import { BrowserRouter, Route } from 'react-router-dom'

import id150302023Comp from './components/id150302023Comp'


class App extends React.Component {
  constructor (props) {
    super()
    this.props = props
    console.log(props)
  }
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
            {this.props.loginProps.logged && 
              <div>
                <Route location={location} path='/tasks' exact component={TasksComponent} />
                <Route location={location} path='/task/:taskId' exact component={TaskDetail} />
              </div>}
          
            <Route location={location} path='/login' exact component={LoginPage} />
            <Route location={location} path='/signup' exact component={SignupPage} />

            <Route location={location} path='/payment' exact component={StripePaymentPage} />

            <Route location={location} path='/id150302023' exact component={id150302023Comp} />


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
    user: state.user,
    loginProps: state.loginProps}),
  { resetErrorMessage: resetErrorMessage}
)(App)
