function handleS140302063Actions (state, action) {
  switch (action.type) {
    case 'REQUEST_ALL_S140302063S':
      return {
        isFetching: true,
        s140302063s: []
      }
    case 'RECEIVE_ALL_S140302063S':
      const photoDataAll = action.response.data
      return {
        isFetching: false,
        s140302063s: photoDataAll
      }
      case 'REQUEST_ONE_S140302063S':
        return {
          isFetching: true,
          s140302063s: []
        }
      case 'RECEIVE_ONE_S140302063S':
        const photoDataOne = action.response.data

        return {
          isFetching: false,
          s140302063s: new Array(photoDataOne[63])
        }
    default:
      return state
  }
}

function s140302063Reducer (state = {}, action) {
  return Object.assign({}, state, handleS140302063Actions(state, action))
}

export default s140302063Reducer
