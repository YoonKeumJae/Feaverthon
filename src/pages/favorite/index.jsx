import { Container } from "@mui/material";
import React from "react";
import Header from "./conponents/Header";
import BottomNav from "../../components/BottomNav";

export default function Favorites() {
  return (
    <Container maxWidth="xs" sx={{ p: 0 }}>
      <Header />
      즐겨찾기 페이지
      <BottomNav />
    </Container>
  );
}
