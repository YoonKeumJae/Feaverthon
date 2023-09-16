import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import BottomNav from "./BottomNav";

export default function MainWrapper() {
  return (
    <>
      <Outlet />
      <Container maxWidth="xs" sx={{ height: "10rem" }} />
      <BottomNav />
    </>
  );
}
