function handleid150302023action (state, action) {
    switch (action.type) {
      case 'REQUEST_PIC':
        return {
          isFetching: true,
          data: {}
        }
      case 'RECEIVE_PIC':
        const all = action.response.data
        let idNo = all.filter(no => no.id === 23);
        return {
          isFetching: false,
          data: idNo[0]
        }
      default:
        return state
    }
   }
   
   function id150302023red (state = {}, action) {
    return Object.assign({}, state, handleid150302023action(state, action))
   }
   
   export default id150302023red