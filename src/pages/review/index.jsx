import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Rating from "./components/Rating";

export default function Reveiw() {
  return (
    <Container maxWidth="xs" sx={{ pt: "6rem" }}>
      <Header title="Hello" />

      <Rating data={{ rating: 3.7, ratingCount: 35, recommend: 0.88 }} />
    </Container>
  );
}
