import userActions from './userActions'
import loginActions from './loginActions'
import taskActions from './taskActions'
import s160302052Action from './s160302052Action'

function resetErrorMessage () {
  return { type: 'RESET_ERROR_MESSAGE' }
}

export {
  resetErrorMessage,
  userActions,
  loginActions,
  taskActions,
  s160302052Action
}
