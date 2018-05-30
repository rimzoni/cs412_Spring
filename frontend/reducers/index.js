import { combineReducers } from 'redux'
import user from './userReducer'
import loginProps from './loginReducer'
import task from './taskReducer'
import s140302059 from './s140302059Reducer'

// Updates error message to notify about the failed fetches.
function errorMessage (state = {}, action) {
  const { type, error } = action

  if (type === 'RESET_ERROR_MESSAGE') {
    return null
  } else if (error) {
    return action.errorMessage
  }

  return state
}

const rootReducer = combineReducers({
  user,
  loginProps,
  task,
  s140302059,
  errorMessage
})

export default rootReducer
