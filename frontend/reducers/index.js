import { combineReducers } from 'redux'
import user from './userReducer'

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
  errorMessage
})

<<<<<<< HEAD
export default rootReducer
=======
export default rootReducer
>>>>>>> 4edd1bc38ab425d7a36af0ea36e88e53bdd7d095
