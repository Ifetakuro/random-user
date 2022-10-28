import { userApi } from "../../API/userApi";
import {
  GET_MALE_USER_FAILURE,
  GET_MALE_USER_REQUEST,
  GET_MALE_USER_SUCCESS
} from "./type";

export const getMaleUsers = () => {
  return (dispatch) => {
    dispatch(getMaleUsersRequest());
    userApi
      .get("/?gender=male&results=50")
      .then((response) => {
        const users = response.data;
        dispatch(getMaleUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getMaleUsersFailure(errorMsg));
      });
  };
};

const getMaleUsersRequest = () => {
  return {
    type: GET_MALE_USER_REQUEST
  };
};
const getMaleUsersSuccess = (users) => {
  return {
    type: GET_MALE_USER_SUCCESS,
    payload: users
  };
};
const getMaleUsersFailure = (erorr) => {
  return {
    type: GET_MALE_USER_FAILURE,
    payload: erorr
  };
};
