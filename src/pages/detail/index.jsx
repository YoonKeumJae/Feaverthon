import { Container } from "@mui/material";
import React from "react";
import Header from "../favorite/components/Header";

export default function Detail() {
  return (
    <Container maxWidth="xs" sx={{ p: 0, pt: 7 }}>
      <Header />
    </Container>
  );
}
