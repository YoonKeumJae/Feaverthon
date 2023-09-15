import { Container } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import Images from "./components/Images";
import Content from "./components/Content";

export default function Detail() {
  return (
    <Container maxWidth="xs" sx={{ px: "0 !important" }}>
      <Header />

      <Images />

      <Content />
    </Container>
  );
}
