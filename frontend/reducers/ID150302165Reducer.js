function handleID150302165Action (state, action) {
  switch (action.type) {
    case 'REQUEST_RECORD':
      return {
        isFetching: true,
        records: {}
      }
    case 'RECEIVE_RECORD':
      const record = action.response.data
      return {
        isFetching: false,
        records: 165
      }
    default:
      return state
  }
}

function ID150302165Reducer (state = {}, action) {
  return Object.assign({}, state, handleID150302165Action(state, action))
}

export default ID150302165Reducer
