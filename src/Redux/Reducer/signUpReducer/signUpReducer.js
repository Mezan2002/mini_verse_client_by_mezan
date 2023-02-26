import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESSFULL,
} from "../ActionTypes/actionTypes";

const initialState = {
  loading: false,
  error: false,
  user: [],
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

    default:
      return state;
  }
};

export default signUpReducer;
