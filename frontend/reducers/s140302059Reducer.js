function handle140302059Action (state, action) {
  switch (action.type) {
      case 'REQUEST_PHOTO':
        return {
          isFetching: true,
          s140302059: []
        }
      case 'RECEIVE_PHOTO':
        const s140302059Photo = action.response.data
        return {
          isFetching: false,
          s140302059: s140302059Data[59]
        }
    default:
      return state
  }
}

function s140302059Reducer (state = {}, action) {
  return Object.assign({}, state, handle140302059Action(state, action))
}

export default s140302059Reducer
