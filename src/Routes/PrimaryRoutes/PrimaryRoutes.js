import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import ImageDiv from "../../Pages/ImageDiv/ImageDiv";
import Home from "../../Pages/MainHome/Home/Home";

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
    path: "imageDiv",
    element: <ImageDiv></ImageDiv>,
  },
]);

export default PrimaryRoutes;
