import { userApi } from "../API/userApi";
import { ActionTypes } from "./conts";

export const getAllUsers = (page) => {
  return (dispatch) => {
    dispatch(getUserRequest(page));
    userApi
      .get(`/?results=10&page=${page}&seed=abc`)
      .then((response) => {
        const users = response.data;
        dispatch(getUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getUserFailure(errorMsg));
      });
  };
};

export const getUserRequest = (page) => {
  return {
    type: ActionTypes.GET_USER_REQUEST,
    payload: page
  };
};
export const getUserSuccess = (users) => {
  return {
    type: ActionTypes.GET_USER_SUCCESS,
    payload: users
  };
};
export const getUserFailure = (erorr) => {
  return {
    type: ActionTypes.GET_USER_FAILURE,
    payload: erorr
  };
};
