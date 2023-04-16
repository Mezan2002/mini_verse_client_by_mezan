import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESSFULL,
  LOGGEDIN_USER,
  LOGOUT_USER,
  POST_DATA_FETCHING_ERROR,
  POST_DATA_FETCHING_START,
  POST_DATA_FETCHING_SUCCESSFULL,
  USERS_DATA,
} from "../Reducer/ActionTypes/actionTypes";

export const fetchingStart = () => {
  return {
    type: FETCHING_START,
  };
};
export const fetchingSuccessfull = (user) => {
  return {
    type: FETCHING_SUCCESSFULL,
    payload: user,
  };
};
export const fetchingError = () => {
  return {
    type: FETCHING_ERROR,
  };
};
export const usersData = (userData) => {
  return {
    type: USERS_DATA,
    payload: userData,
  };
};
export const loggedInUser = (usersData) => {
  return {
    type: LOGGEDIN_USER,
    payload: usersData,
  };
};
export const logOutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
export const postsFetchingStart = () => {
  return {
    type: POST_DATA_FETCHING_START,
  };
};
export const postsFetchingSuccessfull = (posts) => {
  return {
    type: POST_DATA_FETCHING_SUCCESSFULL,
    payload: posts,
  };
};
export const postsFetchingError = () => {
  return {
    type: POST_DATA_FETCHING_ERROR,
  };
};
