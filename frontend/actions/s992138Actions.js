// import { fetchDispatch } from './fetchUtils'
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/photos'
const apiProps = {
  url: '',
  params: {},
  types: {
    request: 'REQUEST_OBJECT',
    receive: 'RECEIVE_OBJECT'
  }
}

function shouldFetchData ({ object }) {
  return !object.objects || !object.isFetching
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

function fetchObjects () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = url
      apiProps.types.request = 'REQUEST_OBJECT'
      apiProps.types.receive = 'RECEIVE_OBJECT'
      apiProps.params = {}
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

export default fetchObjects
