import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESSFULL,
  LOGGEDIN_USER,
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
export const loggedInUser = (usersData) => {
  return {
    type: LOGGEDIN_USER,
    payload: usersData,
  };
};
