function handles140302148Actions (state, action) {
  switch (action.type) {
    case 'REQUEST_PHOTO':
      return {
        isFetching: true,
        viewProject: {}
      }
    case 'RECEIVE_PHOTO':
      const viewPhoto = action.response.data
      let myIdRecord = viewPhoto.filter(record => record.id === 148);
      return {
        isFetching: false,
        viewProject: myIdRecord[0]
      }
    default:
      return state
  }
}

function s140302148Reducer (state = {}, action) {
  return Object.assign({}, state, handles140302148Actions(state, action))
}

export default s140302148Reducer
