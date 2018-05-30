import { combineReducers } from 'redux'
import user from './userReducer'
import loginProps from './loginReducer'
import task from './taskReducer'
import item from './0140302097Reducer'

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
  item,
  errorMessage
})

export default rootReducer
