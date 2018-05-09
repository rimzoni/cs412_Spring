function handleUserActions (state, action) {
  switch (action.type) {
    case 'REQUEST_ALL_USERS':
      return {
        isFetching: true,
        users: []
      }
    case 'RECEIVE_ALL_USERS':
      const userDataAll = action.response.data
      return {
<<<<<<< HEAD
        logged:true,
=======
>>>>>>> 4edd1bc38ab425d7a36af0ea36e88e53bdd7d095
        isFetching: false,
        users: userDataAll
      }
    default:
      return state
  }
}

function userReducer (state = {}, action) {
  return Object.assign({}, state, handleUserActions(state, action))
}

<<<<<<< HEAD
export default userReducer
=======
export default userReducer
>>>>>>> 4edd1bc38ab425d7a36af0ea36e88e53bdd7d095
