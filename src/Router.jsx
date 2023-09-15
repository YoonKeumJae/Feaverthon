import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import Favorite from "./pages/favorite";
import Detail from "./pages/detail";
import SignUp from "./pages/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "favorite",
    element: <Favorite />,
  },
  {
    path: "detail/:id",
    element: <Detail />,
  },
  {
    path: "auth/signup",
    element: <SignUp />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
