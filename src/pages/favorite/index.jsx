import { Container } from "@mui/material";
import React, { useState } from "react";
import { List } from "@phosphor-icons/react";
import Header from "./conponents/Header";
import BottomNav from "../../components/BottomNav";

export default function Favorites() {
  const [centerMenu, setCenterMenu] = useState({
    path: "/",
    icon: <List />,
  });
  return (
    <Container maxWidth="xs" sx={{ p: 0 }}>
      <Header />
      즐겨찾기 페이지
      <BottomNav centerMenu={centerMenu} setCenterMenu={setCenterMenu} />
    </Container>
  );
}
