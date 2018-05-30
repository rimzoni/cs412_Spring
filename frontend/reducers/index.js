import { combineReducers } from 'redux'
import user from './userReducer'
import loginProps from './loginReducer'
import showPic from './Reducer150302031'

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
  errorMessage,
  showPic
})

export default rootReducer
