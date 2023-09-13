import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import Favorites from "./pages/favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "favorites",
    element: <Favorites />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
