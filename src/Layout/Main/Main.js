import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { useSelector } from "react-redux";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInUser = useSelector((state) => state?.loggedInUser[0]);

  useEffect(() => {
    const checkRandomNumber = localStorage.getItem("randomNumber");
    if (checkRandomNumber) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="card shadow-lg">
        <div className="flex items-center justify-center min-h-screen card-body">
          <div className="">
            <h2 className="text-3xl uppercase">
              Please Login to enjoy Mini Verse
            </h2>
            <Link to="/logIn">
              <button className="btn btn-primary btn-block mt-10">Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Navbar loggedInUser={loggedInUser}></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
