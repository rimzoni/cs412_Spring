import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './store/configureStore'

// Define the initial state properties here
const initialAppState = {
  user: {
    logged: false,
    isFetching: false,
    users:[]
  },
  loginProps: {
    logged: false,
    error: '',
    isFetching: false,
    user: {}
  },
  errorMessage: null
}

const store = configureStore(initialAppState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
