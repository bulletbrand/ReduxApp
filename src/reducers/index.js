
import { combineReducers } from 'redux'
import { favoriteReducer } from './favorite'
import { mainReducer } from './main'

export const rootReducer = combineReducers({
  main: mainReducer,
  favorite: favoriteReducer,
})
