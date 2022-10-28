import { ActionTypes } from "./conts";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

const randomUsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        request: payload
      };
    case ActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        response: payload
      };
    case ActionTypes.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        response: null,
        error: payload
      };

    default:
      return state;
  }
};

export default randomUsersReducer;
