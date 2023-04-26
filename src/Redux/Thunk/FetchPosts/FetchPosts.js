import {
  postsFetchingError,
  postsFetchingStart,
  postsFetchingSuccessfull,
} from "../../ActionCreator/ActionCreator";

const fetchPosts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(postsFetchingStart());
      const res = await fetch("https://miniverse-server.vercel.app/posts");
      const data = await res.json();

      if (data.length) {
        dispatch(postsFetchingSuccessfull(data));
      }
    } catch (err) {
      dispatch(postsFetchingError(err));
    }
  };
};

export default fetchPosts;
