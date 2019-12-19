//єто уже екшены и нужны когда не просто хотим вытащить чот со стейта а когда хотим чтобы он реагировл на наше
//какое то действие , а вообщ екшен єто по сути условие в поле тайп и действие в поле payload фия там какая то
//Экшен это просто обьект а екшен криетор это фция которая возвращает обьект
export const SEND_REQUEST = 'SEND_REQUEST';
export const GET_REQUEST_SUCCESS = 'GET_REQUEST_SUCCESS';
export const GET_LOCAL = 'GET_LOCAL';
export const GET_INFO = 'GET_INFO';
export const LOGIN_FAIL = 'LOGIN_FAIL';

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

//тут не обязи ставить таймер у нас может біть просто асинхронный запрос где то в app и все это чисто прелоадер показат ьчтобы
  
setTimeout(() => {
      dispatch({
        type: GET_REQUEST_SUCCESS,
        payload: data,
      })
    } , 2000) 


   

  }
}