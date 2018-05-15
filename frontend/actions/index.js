import userActions from './userActions'
import loginActions from './loginActions'
import s130303008Actions from './s130303008Actions'
function resetErrorMessage () {
  return { type: 'RESET_ERROR_MESSAGE' }
}

export {
  resetErrorMessage,
  userActions,
  loginActions,
  s130303008Actions
}
