function handle140302228 (state, action) {
  switch (action.type) {
      case 'REQUEST':
        return {
          isFetching: true,
          s140302228s: []
        }
      case 'RECEIVE':
        const s140302228Data = action.response.data
        
        return {
          isFetching: false,
          s140302228s: new Array(s140302228Data[227])
        }
    default:
      return state
  }
}

function s140302228Reducer (state = {}, action) {
  return Object.assign({}, state, handle140302228(state, action))
}

export default s140302228Reducer