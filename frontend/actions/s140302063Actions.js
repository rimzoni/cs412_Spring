// import { fetchDispatch } from './fetchUtils'
import axios from 'axios'
const route = 'photos'
const url = 'https://jsonplaceholder.typicode.com/'
const apiProps = {
  url: '',
  params: {},
  types: {
    request: '',
    receive: ''
  }
}

function shouldFetchData ({ s140302063 }) {
  return !s140302063.s140302063s || !s140302063.isFetching
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

function fetchS140302063s () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = url + route
      apiProps.types.request = 'REQUEST_ALL_S140302063S'
      apiProps.types.receive = 'RECEIVE_ALL_S140302063S'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

function fetchByLastThreeS140302063s () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = url + route
      apiProps.types.request = 'REQUEST_ONE_S140302063S'
      apiProps.types.receive = 'RECEIVE_ONE_S140302063S'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}



export default { fetchS140302063s, fetchByLastThreeS140302063s }
