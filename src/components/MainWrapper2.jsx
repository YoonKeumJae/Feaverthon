import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainWrapper2() {
  return (
    <Container maxWidth="xs">
      <Outlet />
    </Container>
  );
}
