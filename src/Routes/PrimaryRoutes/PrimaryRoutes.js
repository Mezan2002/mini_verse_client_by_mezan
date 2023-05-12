import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import LogIn from "../../Pages/LogIn/LogIn";
import Home from "../../Pages/MainHome/Home/Home";
import MultiStepForm from "../../Pages/SignUp/MultiStep/MultiStep";
import UserProfile from "../../Pages/UserProfile/UserProfile";

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
    element: <MultiStepForm></MultiStepForm>,
  },
  {
    path: "/usersProfile/:userId",
    element: <UserProfile></UserProfile>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/userData/${params.userId}`),
  },
]);

export default PrimaryRoutes;
