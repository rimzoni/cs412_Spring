function handlePhoto (state, action) {
  switch (action.type) {
   case 'REQUEST_PHOTO':
     return {
       isFetching: true,
       viewPhoto: {}
     }
     case 'RECEIVE_PHOTO':
       const viewPhoto = action.response.data
       let myId = viewPhoto.filter(record => record.id === 31);
       return {
         isFetching: false,
         viewPhoto: myId[0]
       }
    default:
      return state
  }
}

function Reducer150302031 (state = {}, action) {
  return Object.assign({}, state, handlePhoto(state, action))
}

export default Reducer150302031
