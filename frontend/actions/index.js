import userActions from './userActions'
import loginActions from './loginActions'
import taskActions from './taskActions'
import i150302082Actions from './i150302082Actions'

function resetErrorMessage () {
  return { type: 'RESET_ERROR_MESSAGE' }
}

export {
  resetErrorMessage,
  userActions,
  loginActions,
  i150302082Actions,
  taskActions
}
