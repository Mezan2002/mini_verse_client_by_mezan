import { loggedInUser } from "../../ActionCreator/ActionCreator";

export const loadLoggedInUserData = () => {
  return async (dispatch, getState) => {
    if (localStorage) {
      const url = `https://miniverse-server.vercel.app/usersData?userCode=${localStorage.getItem(
        "randomNumber"
      )}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch(loggedInUser(data));
        });
    }
  };
};
