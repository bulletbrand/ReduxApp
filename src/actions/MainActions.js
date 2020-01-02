export const FETCH_BOOK_REQUEST = 'FETCH_BOOK_REQUEST';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const GET_LOCAL = 'GET_LOCAL';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const GET_FAVOR = 'GET_FAVOR';
export const CHANGE_COLOR_BTN = 'CHANGE_COLOR_BTN';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const FOR_BTN = 'FOR_BTN'


export const forBtn = (data) => {
 return {
   type: FOR_BTN,
   payload: data
 }

}

export const changeBtn = (data) => {
  return {
    type: CHANGE_COLOR_BTN,
    payload: data,
  }
}


export const favorData = (data) => {
  return {
    type: GET_FAVOR,
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
      type: FETCH_BOOK_REQUEST,
      payload: data,
    })


    setTimeout(() => {
      dispatch({
        type: FETCH_BOOK_SUCCESS,
        payload: data,
      })
    }, 1000)
  }
}