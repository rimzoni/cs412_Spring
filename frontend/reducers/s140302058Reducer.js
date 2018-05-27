function handleS140302058Actions (state, action) {
  switch (action.type) {
    case 'REQUEST_ALL_S140302058S':
     return {
        isFetching: true,
        s140302058s: []
      }
    case 'RECEIVE_ALL_S140302058S':
      const s140302058DataAll = action.response.data
      return {
        isFetching: false,
        s140302058s: s140302058Data
      }
      case 'REQUEST_ONE_S140302058S':
        return {
          isFetching: true,
          s140302058s: []
        }
      case 'RECEIVE_ONE_S140302058S':
        const s140302058Data = action.response.data
        return {
          isFetching: false,
          s140302058s: new Array(s140302058Data[58])
        }
    default:
      return state
  }
}

function s140302058Reducer (state = {}, action) {
  return Object.assign({}, state, handleS140302058Actions(state, action))
}

export default s140302058Reducer
