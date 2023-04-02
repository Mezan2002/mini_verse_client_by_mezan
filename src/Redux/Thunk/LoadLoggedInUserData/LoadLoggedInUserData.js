import { loggedInUser } from "../../ActionCreator/ActionCreator";

export const loadLoggedInUserData = () => {
  return async (dispatch, getState) => {
    if (localStorage) {
      const url = `http://localhost:5000/usersData?userCode=${localStorage.getItem(
        "randomNumber"
      )}`;
      console.log(url);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(loggedInUser(data));
        });
    }
  };
};
