function handelPhoto (state, action) {
  switch (action.type) {
   case 'REQUEST_PHOTO':
     return {
       isFetching: true,
       viewPhoto: {}
     }
     case 'RECEIVE_PHOTO':
       const viewPhoto = action.response.data
       let myId = viewPhoto.filter(record => record.id === 450);
       return {
         isFetching: false,
         viewPhoto: myId[0]
       }
    default:
      return state
  }
}

function A992450Reducer (state = {}, action) {
  return Object.assign({}, state, handelPhoto(state, action))
}

export default A992450Reducer
