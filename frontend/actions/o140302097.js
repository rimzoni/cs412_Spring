import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/photos'
const apiProps = {
  url: '',
  params: {},
  types: {
    request: 'REQUEST_DATA',
    receive: 'RECEIVE_DATA'
  }
}



function shouldFetchData ({ data }) {
  return !data.datas || !data.isFetching
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
        const obj = opts.onReceived ? opts.onReceived(response) : { response }
        return dispatch(Object.assign({ type: opts.types.receive }, obj))
      })
      .catch(error => dispatch({ type: 'RESET_ERROR_MESSAGE' }))
  }
}



function fetchdatas () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = url
      apiProps.types.request = 'REQUEST_DATA'
      apiProps.types.receive = 'RECEIVE_DATA'
      apiProps.params = {}
      return dispatch(fetchDispatch(apiProps))
    }
  }
}


export default fetchdatas
