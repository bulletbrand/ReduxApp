import { SEND_REQUEST, GET_REQUEST_SUCCESS, GET_LOCAL, GET_INFO,CHANGE_COLOR} from '../actions/MainActions'
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
      

    case CHANGE_COLOR:
//этот код потом вынести отсюда и перебиреть вытаскивая с редакс со стора в app компоненте
      const element = state.data.find((el) => el.show.id === action.payload);
      const elementIndex = state.data.findIndex(el => el.show.id === action.payload);

      
      element.show.changeColor = !element.show.changeColor;
      
      const newArr = [...state.data];
      newArr[elementIndex] = element;

      return {
        ...state,
        data: newArr
      }


    default:
      return state
  }
}




      /* мой варик  почему не сработал?

      
         const element = state.data.find((el) => el.show.id === action.payload);
    const elementIndex = state.data.findIndex(el => el.show.id === action.payload);

    
    element.show.changeColor = !element.show.changeColor;
    
    
    return  {
      ...state,
      data:[...state.data.slice(0,elementIndex),
      element,
      ...state.data.slice(elementIndex + 1)]
      }

      */