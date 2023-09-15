import React from "react";
import { Heart, House, MagnifyingGlass, User } from "@phosphor-icons/react";
import primaryColor from "../../common";

const menu = [
  {
    path: "/",
    icon: (isVisited) => (
      <House
        weight={isVisited ? "fill" : "thin"}
        color={isVisited ? primaryColor : "#222"}
      />
    ),
  },
  {
    path: "/search",
    icon: (isVisited) => (
      <MagnifyingGlass
        weight={isVisited ? "fill" : "thin"}
        color={isVisited ? primaryColor : "#222"}
      />
    ),
  },
  {
    path: "/favorite",
    icon: (isVisited) => (
      <Heart
        weight={isVisited ? "fill" : "thin"}
        color={isVisited ? primaryColor : "#222"}
      />
    ),
  },
  {
    path: "/mypage",
    icon: (isVisited) => (
      <User
        weight={isVisited ? "fill" : "thin"}
        color={isVisited ? primaryColor : "#222"}
      />
    ),
  },
];

export default menu;
