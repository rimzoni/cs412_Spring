function handleAction140302101 (state, action) {
  switch (action.type) {
    case 'REQUEST_PHOTO':
      return {
        isFetching: true,
        viewProject: {}
      }
    case 'RECEIVE_PHOTO':
      const viewPhoto = action.response.data
      let myIdRecord = viewPhoto.filter(record => record.id === 101);
      return {
        isFetching: false,
        viewProject: myIdRecord[0]
      }
    default:
      return state
  }
}

function Reducer140302101 (state = {}, action) {
  return Object.assign({}, state, handleAction140302101(state, action))
}

export default Reducer140302101
