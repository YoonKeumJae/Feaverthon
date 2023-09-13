import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import BasicMap from "./pages/map";
import Mapmain from "./pages/map";
import Mapsearch from "./pages/map/search";

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
    path: "/Mapsearch",
    element: <Mapsearch />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
