import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import Favorite from "./pages/favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "favorite",
    element: <Favorite />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
