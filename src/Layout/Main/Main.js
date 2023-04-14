import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { useSelector } from "react-redux";
import LogIn from "../../Pages/LogIn/LogIn";

const Main = () => {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.loggedInUser[0]);
  console.log(loggedInUser);

  return (
    <div>
      {loggedInUser ? (
        <div>
          <Navbar loggedInUser={loggedInUser}></Navbar>
          <Outlet></Outlet>
        </div>
      ) : (
        <LogIn></LogIn>
      )}
    </div>
  );
};

export default Main;
