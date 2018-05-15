function handles130303008Actions (state, action) {
  switch (action.type) {
    case 'REQUEST_PHOTO':
      return {
        isFetching: true,
        viewProject: {}
      }
    case 'RECEIVE_PHOTO':
      const viewPhoto = action.response.data
      let myIdRecord = viewPhoto.filter(record => record.id === 8);
      return {
        isFetching: false,
        viewProject: myIdRecord[0]
      }
    default:
      return state
  }
}

function s130303008Reducer (state = {}, action) {
  return Object.assign({}, state, handles130303008Actions(state, action))
}

export default s130303008Reducer
