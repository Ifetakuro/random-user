import {
  GET_SINGLE_USER_FAILURE,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  RESET_SINGLE_USER
} from "./type";

const intitialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

export const singleUserReducers = (
  state = intitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        request: payload
      };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        response: payload,
        error: null
      };
    case GET_SINGLE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        response: null,
        error: payload
      };
    case RESET_SINGLE_USER:
      return {
        ...state,
        loading: false,
        success: false,
        request: null,
        response: null,
        error: null
      };
    default:
      return state;
  }
};

export default singleUserReducers;
