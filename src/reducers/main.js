import { SEND_REQUEST, GET_REQUEST_SUCCESS, GET_LOCAL, GET_INFO,CHANGE_COLOR,REQUEST_ERROR} from '../actions/MainActions'
import { ACTION_CHANGE_INPUT_VALUE } from '../actions/InputAction'

const initialState = {
  data: [],
  inputValue: '',
  info: [],
}



export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_REQUEST:
      return { ...state, preloader: true }  //начинается запрос и флажок ставится тру тоесть показать прелоадер

    case GET_REQUEST_SUCCESS:
      return { ...state, data:action.payload, preloader: false } //данные тутачки приходят а не в самом запросе

    case REQUEST_ERROR:
      return { ...state, error: true }

    case ACTION_CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.payload }

    case GET_LOCAL:
      return { ...state, data: action.payload }  

    case GET_INFO:
      return { ...state, info: action.payload }  
      

    case CHANGE_COLOR:
      const element = state.data.find((el) => el.show.id === action.payload);
      const elementIndex = state.data.findIndex(el => el.show.id === action.payload);
      element.show.changeColor = !element.show.changeColor;
        return  {
          ...state,
          data:[...state.data.slice(0,elementIndex),
          element,
          ...state.data.slice(elementIndex + 1)]
          }

    default:
      return state
  }
}


      /*   const element = state.data.find((el) => el.show.id === action.payload);
      const elementIndex = state.data.findIndex(el => el.show.id === action.payload);

      
      element.show.changeColor = !element.show.changeColor;
      
      const newArr = [...state.data];
      newArr[elementIndex] = element;

      return {
        ...state,
        data: newArr
      }
*/