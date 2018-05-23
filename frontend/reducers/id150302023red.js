function handle150302023action (state, action) {
    switch (action.type) {
      case 'REQUEST_PIC':
        return {
          isFetching: true,
          photo: {}
        }
      case 'RESPONSE_PIC':
        const picture = action.response.data
        let number = picture.filter(record => record.id === 23);
        return {
          
          isFetching: false,
          photo: number[0]
        }
      
      default:
        return state
    }
  }
  
  function id150302023red (state = {}, action) {
    return Object.assign({}, state, handle150302023action(state, action))
  }
  
  export default id150302023red