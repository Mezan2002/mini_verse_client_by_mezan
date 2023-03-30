import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESSFULL,
  LOGGEDIN_USER,
  USERS_DATA,
} from "../ActionTypes/actionTypes";

const initialState = {
  loading: false,
  error: false,
  user: [],
  loggedInUser: [],
  usersData: [],
};
const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
        user: [],
      };
    case FETCHING_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        error: false,
        user: [...state.user, action.payload],
      };
    case FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        user: [],
      };

    case USERS_DATA:
      return {
        ...state,
        loading: false,
        error: true,
        user: [],
        usersData: [...state.usersData, action.payload],
      };

    case LOGGEDIN_USER:
      return {
        ...state,
        loading: false,
        error: false,
        user: [...state.user],
        loggedInUser: [...state.loggedInUser, action.payload],
      };

    default:
      return state;
  }
};

export default signUpReducer;
