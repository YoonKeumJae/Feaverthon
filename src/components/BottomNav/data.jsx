import React from "react";
import { Heart, House, MagnifyingGlass, User } from "@phosphor-icons/react";

const menu = [
  {
    path: "/",
    icon: (isVisited) => (
      <House
        weight={isVisited ? "bold" : "thin"}
        color={isVisited ? "#fff" : "#222"}
      />
    ),
    matched: [""],
  },
  {
    path: "/search",
    icon: (isVisited) => (
      <MagnifyingGlass
        weight={isVisited ? "bold" : "thin"}
        color={isVisited ? "#fff" : "#222"}
      />
    ),
    matched: ["search", "detail"],
  },
  {
    path: "/favorite",
    icon: (isVisited) => (
      <Heart
        weight={isVisited ? "bold" : "thin"}
        color={isVisited ? "#fff" : "#222"}
      />
    ),
    matched: ["favorite"],
  },
  {
    path: "/mypage",
    icon: (isVisited) => (
      <User
        weight={isVisited ? "bold" : "thin"}
        color={isVisited ? "#fff" : "#222"}
      />
    ),
    matched: ["mypage"],
  },
];

export default menu;
