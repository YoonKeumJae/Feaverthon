import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { Heart, House, MagnifyingGlass, User } from "@phosphor-icons/react";
import React from "react";
import { useLocation } from "react-router-dom";
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

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  max-width: 444px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
`;

export default function BottomNav() {
  const location = useLocation();
  const pafilldex = menu.findIndex(
    (object) => location.pathname && object.path === location.pathname,
  );

  return (
    <StyledFooter>
      {menu.map((item, idx) => {
        // 중간 동그라미 버튼 자리
        return (
          <IconButton key={item.path}>
            {item.icon(pafilldex === idx)}
          </IconButton>
        );
      })}
    </StyledFooter>
  );
}
