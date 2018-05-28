export default function(state = {pending: false, data: [{}]},action){
	console.log({state, action});
	switch (action.type){
		case "GET_PHOTO_PENDING":
			return {pending: true, data: [{}]};

		case "GET_PHOTO_FULLFILLED":
			return {pending:false,data:action.response.data};
		default:
			return state;
	}
	return state;
}
