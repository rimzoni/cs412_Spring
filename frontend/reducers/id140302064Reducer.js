function handle140302064Action (state, action) {
    switch (action.type) {
        case 'REQUEST_PHOTO':
            return {
                isFetching: true,
                id140302064: []
            }
        case 'RECEIVE_PHOTO':
            const id140302064Photo = action.response.data
            return {
                isFetching: false,
                id140302064: id140302064Data[64]
            }
        default:
            return state
    }
}

function id140302064Reducer (state = {}, action) {
    return Object.assign({}, state, handle140302064Action(state, action))
}

export default id140302064Reducer()