import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import Favorite from "./pages/favorite";
import Detail from "./pages/detail";

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
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
