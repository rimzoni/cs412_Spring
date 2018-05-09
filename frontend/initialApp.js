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
<<<<<<< HEAD
    users:[],
    usersById:[]
=======
    users:[]
>>>>>>> 4edd1bc38ab425d7a36af0ea36e88e53bdd7d095
  },
  errorMessage: null
}

const store = configureStore(initialAppState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
<<<<<<< HEAD
)
=======
)
>>>>>>> 4edd1bc38ab425d7a36af0ea36e88e53bdd7d095
