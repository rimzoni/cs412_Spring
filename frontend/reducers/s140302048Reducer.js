
function handleAction(state,action){
	switch (action.type){
		case "REQUEST_INFO":
			return {pending: true, data: [{}]};

		case "GET_INFO":
			return {pending:false,data:action.response.data}; 
		default:
			return state;
	}
	return state;	
}

function s140302048Reducer (state = {pending: false, data: [{}]}, action) {
  return Object.assign({}, state, handleAction(state, action))
}
export default s140302048Reducer
