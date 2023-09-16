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
import SignIn from "./pages/auth/SignIn";
import MainWrapper from "./components/MainWrapper";
import MainWrapper2 from "./components/MainWrapper2";
import Reveiw from "./pages/review";
import WriteReview from "./pages/WriteReview";
import Mypage from "./pages/mypage/Mypage";
import Language from "./pages/mypage/Language";
import Modify from "./pages/mypage/Modify";

import DemoPaper from "./pages/main";
import DetailMap from "./pages/maindetail";

const router = createBrowserRouter([
  {
    path: "/",
    // have bottomNav
    element: <MainWrapper />,
    children: [
      { index: true, element: <BasicMap /> },
      { path: "detailmap", element: <DetailMap /> },
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
      {
        path: "mypage/",
        element: <Mypage />,
      },
      {
        path: "mypage/language",
        element: <Language />,
      },
      {
        path: "mypage/modify",
        element: <Modify />,
      },
    ],
  },
  {
    path: "auth/",
    // have not bottomNav
    element: <MainWrapper2 />,
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
  {
    path: "main/",
    element: <DemoPaper />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
