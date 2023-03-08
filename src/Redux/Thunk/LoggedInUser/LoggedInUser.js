import {
  fetchingError,
  fetchingStart,
  fetchingSuccessfull,
  loggedInUser,
} from "../../ActionCreator/ActionCreator";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

const LoggedInUser = (userData) => {
  return async (dispatch, getState) => {
    dispatch(fetchingStart());
    const user = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    try {
      const res = await fetch("http://localhost:5000/signUp", user);
      const data = await res.json();
      console.log(data);
      if (data.acknowledged) {
        dispatch(loggedInUser(userData));
        Swal.fire("Sign Up Successfully!", "", "success");
      }
    } catch (e) {
      dispatch(fetchingError);
    }
  };
};

export default LoggedInUser;
