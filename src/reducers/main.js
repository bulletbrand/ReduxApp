import { SEND_REQUEST, GET_REQUEST_SUCCESS, GET_LOCAL, GET_INFO} from '../actions/MainActions'
import { ACTION_CHANGE_INPUT_VALUE } from '../actions/InputAction'

const initialState = {
  data: [
    {
      show: {
        name: '',
        image: {
          medium: "https://storage1a.censor.net/images/b/8/6/7/b86703fa22d362f541bde6f24e30bdd1/original.jpg",
        },
        id: 1,
        summary: '',
        type: '',
      },
      colorStatus: false,

    },

  ],
  preloader: false,
  inputValue: '',
  info: [],
}



export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_REQUEST:
      return { ...state, preloader: true }  //начинается запрос и флажок ставится тру тоесть показать прелоадер

    case GET_REQUEST_SUCCESS:
      return { ...state, data:action.payload, preloader: false } //данные тутачки приходят а не в самом запросе

    case ACTION_CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.payload }

    case GET_LOCAL:
      return { ...state, data: action.payload }  //это при перезагрузке страници чтобы данные оставались, нам ведь преоадер уже не нужен

    case GET_INFO:
      return { ...state, info: action.payload }  //это при перезагрузке страници чтобы данные оставались, нам ведь преоадер уже не нужен
   

    default:
      return state
  }
}



/*
      return { ...state, data: [...state.data ,...action.payload], preloader: false } //данные тутачки приходят а не в самом запросе
*/