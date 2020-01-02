import { createStore, applyMiddleware } from 'redux' //2 это просто усилитель который будет инфу выводить подробную о действии
import { rootReducer } from '../reducers'
//import logger from 'redux-logger'  //логер позволяющий смотреть prev state,action,next state
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//initial state не нужно так как редюсер составной и оно само создается(составной - их несколько )
export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)//logger
  ));