import userActions from './userActions'

function resetErrorMessage () {
  return { type: 'RESET_ERROR_MESSAGE' }
}

export {
  resetErrorMessage,
  userActions
}