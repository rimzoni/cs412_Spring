function handles140302101Actions (state, action) {
  switch (action.type) {
    case 'REQUEST_PHOTO':
      return {
        isFetching: true,
        Project2: {}
      }
    case 'RECEIVE_PHOTO':
      const viewPhoto = action.response.data
      let id_Record = viewPhoto.filter(record => record.id === 101);
      return {
        isFetching: false,
        Project2: id_Record[0]
      }
    default:
      return state
  }
}

function s140302101Reducer (state = {}, action) {
  return Object.assign({}, state, handles140302101Actions(state, action))
}

export default s140302101Reducer
