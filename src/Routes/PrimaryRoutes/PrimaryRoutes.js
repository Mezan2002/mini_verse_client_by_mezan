import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import LogIn from "../../Pages/LogIn/LogIn";
import Home from "../../Pages/MainHome/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Test from "../../Pages/Test/Test";

const PrimaryRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/logIn",
    element: <LogIn></LogIn>,
  },
  {
    path: "/test",
    element: <Test></Test>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);

export default PrimaryRoutes;
