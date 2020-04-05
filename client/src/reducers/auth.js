import {AUTH_USER, AUTH_ERROR} from '../actions/types'

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      if(action.payload)
      return{...state, athenticated: action.payload}
      break;
      case AUTH_ERROR:
      return {...state, errorMessage: action.payload}
    default:
      return INITIAL_STATE;
  }
}