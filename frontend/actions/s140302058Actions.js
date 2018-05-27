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

function shouldFetchData ({ s140302058 }) {
  return !s140302058.s140302058s || !s140302058.isFetching
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

function fetchS140302058s () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = url
      apiProps.types.request = 'REQUEST_ALL_S140302058S'
      apiProps.types.receive = 'RECEIVE_ALL_S140302058S'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

function fetchOneS140302058s () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = url
      apiProps.types.request = 'REQUEST_ONE_S140302058S'
      apiProps.types.receive = 'RECEIVE_ONE_S140302058S'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}



export default { fetchS140302058s, fetchOneS140302058s }
