import userActions from './userActions'
import loginActions from './loginActions'
import taskActions from './taskActions'
import s140302063Actions from './s140302063Actions.js'

function resetErrorMessage () {
  return { type: 'RESET_ERROR_MESSAGE' }
}

export {
  resetErrorMessage,
  userActions,
  loginActions,
  taskActions,
  s140302063Actions
}
