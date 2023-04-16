import {
  POST_DATA_FETCHING_ERROR,
  POST_DATA_FETCHING_START,
  POST_DATA_FETCHING_SUCCESSFULL,
} from "../ActionTypes/actionTypes";

const initialState = {
  loading: false,
  error: false,
  allPosts: [],
};
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
        allPosts: [],
      };
    case POST_DATA_FETCHING_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        error: false,
        allPosts: [...state.allPosts, action.payload],
      };
    case POST_DATA_FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        allPosts: [],
      };

    default:
      return state;
  }
};

export default PostReducer;
