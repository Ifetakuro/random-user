import { userApi } from "../../API/userApi";
import {
  GET_SINGLE_USER_FAILURE,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  RESET_SINGLE_USER
} from "./type";

export const getSingleUser = (id) => {
  return (dispatch) => {
    dispatch(getSingleUserRequest(id));
    userApi
      .get(`/?id=${id}`)
      .then((response) => {
        const users = response.data;
        dispatch(getSingleUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getSingleUserFailure(errorMsg));
      });
  };
};

const getSingleUserRequest = (id) => {
  return {
    type: GET_SINGLE_USER_REQUEST,
    payload: id
  };
};

const getSingleUserSuccess = (users) => {
  return {
    type: GET_SINGLE_USER_SUCCESS,
    payload: users
  };
};

const getSingleUserFailure = (erorr) => {
  return {
    type: GET_SINGLE_USER_FAILURE,
    payload: erorr
  };
};

export const resetSingleUser = () => {
  return {
    type: RESET_SINGLE_USER
  };
};
