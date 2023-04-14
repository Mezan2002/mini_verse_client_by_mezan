import { fetchingStart, loggedInUser } from "../../ActionCreator/ActionCreator";

export const loadLoggedInUserData = () => {
  return async (dispatch, getState) => {
    dispatch(fetchingStart());
    if (localStorage) {
      const url = `http://localhost:5000/usersData?userCode=${localStorage.getItem(
        "randomNumber"
      )}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(loggedInUser(data));
        });
    }
  };
};
