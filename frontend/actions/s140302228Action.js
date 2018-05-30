import axios from 'axios'


const apiProps = {
  url: 'https://jsonplaceholder.typicode.com/photos',
  params: {},
  types: {
    request: '',
    receive: ''
  }
}

function shouldFetchData ({ s140302228 }) {
  return !s140302228.s140302228s || !s140302228.isFetching
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


function fetch140302228 () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.types.request = 'REQUEST'
      apiProps.types.receive = 'RECEIVE'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

export default { fetch140302228 }