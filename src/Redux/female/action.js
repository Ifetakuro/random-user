import { userApi } from "../../API/userApi";
import {
  GET_FEMALE_USER_FAILURE,
  GET_FEMALE_USER_REQUEST,
  GET_FEMALE_USER_SUCCESS
} from "./type";

export const getFemaleUsers = () => {
  return (dispatch) => {
    dispatch(getFemaleUsersRequest());
    userApi
      .get("/?gender=female&results=50")
      .then((response) => {
        const users = response.data;
        dispatch(getFemaleUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getFemaleUsersFailure(errorMsg));
      });
  };
};

const getFemaleUsersRequest = () => {
  return {
    type: GET_FEMALE_USER_REQUEST
  };
};
const getFemaleUsersSuccess = (users) => {
  return {
    type: GET_FEMALE_USER_SUCCESS,
    payload: users
  };
};
const getFemaleUsersFailure = (erorr) => {
  return {
    type: GET_FEMALE_USER_FAILURE,
    payload: erorr
  };
};
