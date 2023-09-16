import React from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import BasicMap from "./pages/map";
import Favorite from "./pages/favorite";
import Detail from "./pages/detail";
import SignUp from "./pages/auth/SignUp";
import MainWrapper from "./components/MainWrapper";
import MainWrapper2 from "./components/MainWrapper2";
import Reveiw from "./pages/review";
import WriteReview from "./pages/WriteReview";

const router = createBrowserRouter([
  {
    path: "/",
    // have bottomNav
    element: <MainWrapper />,
    children: [
      { index: true, element: <BasicMap /> },
      { path: "favorite", element: <Favorite /> },
      {
        path: "detail/*",
        // detail id 값 누락 시 redirect
        loader: ({ params }) => {
          return params.id === undefined && redirect("/");
        },
        children: [
          {
            path: ":id",
            element: <Detail />,
          },
        ],
      },
      {
        path: "review/*",
        children: [
          {
            path: ":id",
            element: <Reveiw />,
          },
        ],
      },
    ],
  },
  {
    path: "auth/",
    // have not bottomNav
    element: <MainWrapper2 />,
    children: [{ path: "signup", element: <SignUp /> }],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
