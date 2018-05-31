import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/photos'
const apiProps = {
  url: '',
  params: {},
  types: {
    request: '',
    receive: ''
  }
}

function shouldFetchData ({ l140302051 }) {
  return !l140302051.l140302051s || !l140302051.isFetching
}

function fetchDispatch (opts) {
  return dispatch => {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      }
    }
    dispatch({ type: opts.types.request }, config)
    return axios
      .get(opts.url, {
        params: opts.params
      })
      .then(response => {
        // Dispatch the recevied action with type and data
        const obj = opts.onReceived ? opts.onReceived(response) : { response }
        return dispatch(Object.assign({ type: opts.types.receive }, obj))
      })
      .catch(error => dispatch({ type: 'RESET_ERROR_MESSAGE' }))
  }
}

function fetchl140302051s () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = url
      apiProps.types.request = 'REQUEST_ALL_l140302051s'
      apiProps.types.receive = 'RECEIVE_ALL_l140302051s'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

export default fetchItems
