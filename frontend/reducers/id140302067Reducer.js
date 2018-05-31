function handle140302067Action (state, action) {
    switch (action.type) {
        case 'REQUEST_PHOTO':
            return {
                isFetching: true,
                id140302067: []
            }
        case 'RECEIVE_PHOTO':
            const id140302064Photo = action.response.data
            return {
                isFetching: false,
                id140302067: id140302067Data[67]
            }
        default:
            return state
    }
}

function id140302067Reducer (state = {}, action) {
    return Object.assign({}, state, handle140302067Action(state, action))
}

export default id140302067Reducer()
