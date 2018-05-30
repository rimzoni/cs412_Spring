function handleS992138Actions (state, action) {
  switch (action.type) {
    case 'REQUEST_OBJECT':
      return {
        isFetching: true,
        objects: []
      }
    case 'RECEIVE_OBJECT':
      const objectDataAll = action.response.data
      return {
        isFetching: false,
        objects: objectDataAll
      }
    default:
      return state
  }
}

function s992138Reducer (state = {}, action) {
  return Object.assign({}, state, handleS992138Actions(state, action))
}

export default s992138Reducer
