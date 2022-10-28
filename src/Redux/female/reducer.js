import {
  GET_FEMALE_USER_FAILURE,
  GET_FEMALE_USER_REQUEST,
  GET_FEMALE_USER_SUCCESS
} from "./type";

const intitialState = {
  loading: false,
  success: false,
  response: null,
  error: null
};

export const femaleUsersReducers = (
  state = intitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_FEMALE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_FEMALE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        response: payload,
        error: null
      };
    case GET_FEMALE_USER_FAILURE:
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

export default femaleUsersReducers;
