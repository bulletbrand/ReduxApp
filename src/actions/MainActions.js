export const SEND_REQUEST = 'SEND_REQUEST';
export const GET_REQUEST_SUCCESS = 'GET_REQUEST_SUCCESS';
export const GET_LOCAL = 'GET_LOCAL';
export const GET_INFO = 'GET_INFO';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const GET_FAVOR = 'GET_FAVOR';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const REQUEST_ERROR = 'REQUEST_ERROR';


export const changeBtn = (data) => {
  return {
    type: CHANGE_COLOR,
    payload: data,
  }
}


export const favorData = (data) => {
  return {
    type: GET_FAVOR,
    payload: data,
  }
}


export const infoRequest = (data) => {
  return {
    type: GET_INFO,
    payload: data,
  }
}


export const getLocal = (data) => {

  return {
    type: GET_LOCAL,
    payload: data,
  }
}

export const setRequest = (data) => {

  return dispatch => {

    dispatch({
      type: SEND_REQUEST,
      payload: data,
    })


    setTimeout(() => {
      dispatch({
        type: GET_REQUEST_SUCCESS,
        payload: data,
      })
    }, 1000)
  }
}