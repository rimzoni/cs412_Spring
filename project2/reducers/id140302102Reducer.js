function handleid140302102Actions (state, action) {
  switch (action.type) {
    case 'REQUEST_ALL_id140302102':
     return {
        isFetching: true,
        id140302102: []
      }
    case 'RECEIVE_ALL_id140302102':
      const id140302102DataAll = action.response.data
      return {
        isFetching: false,
        id140302102: id140302102Data
      }
      case 'REQUEST_ONE_id140302102':
        return {
         isFetching: true,
         id140302102: []
       }
      case 'RECEIVE_ONE_id140302102':
        const id140302102Data = action.response.data
        return {
          isFetching: false,
          id140302102: new Array(id140302102Data[102])
        }
    default:
      return state
  }
}

function id140302102Reducer (state = {}, action) {
  return Object.assign({}, state, handle140302102Actions(state, action))
}

export default id140302102Reducer