import userActions from './userActions'
import loginActions from './loginActions'
import taskActions from './taskActions'
import s992138Actions from './s992138Actions'

function resetErrorMessage () {
  return { type: 'RESET_ERROR_MESSAGE' }
}

export {
  resetErrorMessage,
  userActions,
  loginActions,
  taskActions,
  s992138Actions
}
