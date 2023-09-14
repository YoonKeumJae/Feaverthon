import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import BasicMap from "./pages/map";
import Favorite from "./pages/favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/Basicmap",
    element: <BasicMap />,
  },
  {
    path: "favorite",
    element: <Favorite />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
