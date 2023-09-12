import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import BasicMap from "./pages/map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/Basicmap",
    element: <BasicMap />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
