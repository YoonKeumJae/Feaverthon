import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BasicMap from "./pages/map";
import Favorite from "./pages/favorite";
import Detail from "./pages/detail";
import SignUp from "./pages/auth/SignUp";
import MainWrapper from "./components/MainWrapper";
import MainWrapper2 from "./components/MainWrapper2";
import { element } from "prop-types";
import DemoPaper from "./pages/main";
import DetailMap from "./pages/maindetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainWrapper />,
    children: [
      { index: true, element: <BasicMap /> },
      { path: "detailmap", element: <DetailMap /> },
      { path: "favorite", element: <Favorite /> },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "auth/",
    element: <MainWrapper2 />,
    children: [{ path: "signup", element: <SignUp /> }],
  },
  {
    path: "main/",
    element: <DemoPaper />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
