import { SEND_REQUEST, GET_REQUEST_SUCCESS  } from '../actions/MainActions'

const initialState = {
  data: [],
  preloader: false
}



export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_REQUEST:
      return { ...state, data: action.payload,preloader: true }

      case GET_REQUEST_SUCCESS:
      return { ...state, photos: action.payload, preloader: false }


    default:
      return state
  }
}
















/*
{
      show: {
        name: 'name',
        image: {
          medium: "https://storage1a.censor.net/images/b/8/6/7/b86703fa22d362f541bde6f24e30bdd1/original.jpg",
        },
        id: 1,
        summary: 'summary',
        type: 'type',
      },
    },
    {
      show: {
        name: 'name',
        image: {
          medium: "https://storage1a.censor.net/images/b/8/6/7/b86703fa22d362f541bde6f24e30bdd1/original.jpg",
        },
        id: 2,
        summary: 'summary',
        type: 'type',
      },
 
    },
    {
      show: {
        name: 'name',
        image: {
          medium: "https://storage1a.censor.net/images/b/8/6/7/b86703fa22d362f541bde6f24e30bdd1/original.jpg",
        },
        id: 3,
        summary: 'summary',
        type: 'type',
      },
 
    }
    */