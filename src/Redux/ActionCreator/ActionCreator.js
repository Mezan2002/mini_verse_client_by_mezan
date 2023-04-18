import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESSFULL,
  LOGGEDIN_USER,
  LOGOUT_USER,
  USERS_DATA,
} from "../ActionTypes/actionTypes";

// users data start
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
// users data start
