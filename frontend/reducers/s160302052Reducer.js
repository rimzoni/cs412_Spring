function s160302052Reducer (state, action) {
  switch (action.type) {
    case 'REQUEST_IMAGE':
      return {
        isFetching: true,
        tasks: []
      }
    case 'RECEIVE_IMAGE':
      const allTasks = action.response.data
      return {
        isFetching: false,
        tasks: allTasks
      }
    default:
      return state
  }
}

function s160302052Reducer (state = {}, action) {
  return Object.assign({}, state, handles160302052Action(state, action))
}

export default s160302052Reducer
