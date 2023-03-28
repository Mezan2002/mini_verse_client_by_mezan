import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import LogIn from "../../Pages/LogIn/LogIn";
import Home from "../../Pages/MainHome/Home/Home";
import SignUp from "../../Pages/SignUp/SignUpInfo/SignUp";
import MultiStepForm from "../../Pages/SignUp/TestMultiStep/TestMultiStep";
import UserName from "../../Pages/SignUp/UserName/UserName";

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
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/userName",
    element: <UserName></UserName>,
  },
  {
    path: "/testMutliStep",
    element: <MultiStepForm></MultiStepForm>,
  },
]);

export default PrimaryRoutes;
