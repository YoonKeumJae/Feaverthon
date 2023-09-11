import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
