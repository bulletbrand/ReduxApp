//єто уже екшены и нужны когда не просто хотим вытащить чот со стейта а когда хотим чтобы он реагировл на наше
//какое то действие , а вообщ екшен єто по сути условие в поле тайп и действие в поле payload фия там какая то
//Экшен это просто обьект а екшен криетор это фция которая возвращает обьект
export const SEND_REQUEST = 'SEND_REQUEST';
export const GET_REQUEST_SUCCESS = 'GET_REQUEST_SUCCESS';



export function setRequest(data) {
  return dispatch => {

    dispatch({
      type: SEND_REQUEST,
      payload: data,
    })


    setTimeout(() => {
      dispatch({
        type: GET_REQUEST_SUCCESS,
        payload: [1, 2, 3, 4, 5],
      })
    }, 3000)

  }
}