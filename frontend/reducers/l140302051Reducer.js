function handlel140302051Actions (state, action) {
  switch (action.type) {
    case 'REQUEST_ALL_l140302051s':
     return {
        isFetching: true,
        l140302051s: []
      }
    case 'RECEIVE_ALL_l140302051s':
      const l140302051DataAll = action.response.data
      return {
        isFetching: false,
        l140302051s: l140302051Data
      }
    default:
      return state
    }
}

function l140302051Reducer (state = {}, action) {
  return Object.assign({}, state, handlel140302051Actions(state, action))
}

export default l140302051Reducer
