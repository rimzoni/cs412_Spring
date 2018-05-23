function handleR150302007Action (state, action) {
  switch (action.type) {
    case 'REQUEST_ITEM':
      return {
        isFetching: true,
        items: []
      }
    case 'RECEIVE_ITEM':
      const itemDataAll = action.response.data
      return {
        isFetching: false,
        items: itemDataAll
      }
    default:
      return state
  }
}

function r150302007Reducer (state = {}, action) {
  return Object.assign({}, state, handleR150302007Action(state, action))
}

export default r150302007Reducer
