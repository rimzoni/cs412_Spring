function handleLoginActions (state, action) {
  switch (action.type) {
    case 'REQUEST_LOGIN_DETAILS':
      return {
        logged: false,
        isFetching: true,
        user: {}
      }
    case 'RECEIVE_LOGIN_DETAILS':
      const userData = action.response.data
      localStorage.setItem('user', JSON.stringify(action.response.data))
      return {
        logged:userData.logged,
        error: userData.error,
        isFetching: false,
        user: userData
      }
    default:
      return state
  }
}

function loginReducer (state = {}, action) {
  return Object.assign({}, state, handleLoginActions(state, action))
}

export default loginReducer
