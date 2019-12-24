import { GET_FAVOR } from '../actions/MainActions'

const initialState = {
  favorite: []
}

export function favoriteReducer(state = initialState, action) {
  switch (action.type) {

    case GET_FAVOR:
      return { ...state, favorite: action.payload }

    default:
      return state
  }
}