import { Container, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { List } from "@phosphor-icons/react";
import Header from "./conponents/Header";
import BottomNav from "../../components/BottomNav";
import ReviewItem from "./conponents/ReviewItem";

const tab = ["전체", "대구", "경북", "서울", "부산"];

export default function Favorites() {
  const [tabIndex, setTabIndex] = useState(0);
  const [centerMenu, setCenterMenu] = useState({
    path: "/",
    icon: <List />,
  });
  return (
    <Container maxWidth="xs" sx={{ p: 0, pt: 7 }}>
      <Header />

      <Tabs
        value={tabIndex}
        onChange={(_, newValue) => {
          setTabIndex(newValue);
        }}
      >
        {tab.map((item) => (
          <Tab label={item} key={item} />
        ))}
      </Tabs>

      <ReviewItem />

      <BottomNav centerMenu={centerMenu} setCenterMenu={setCenterMenu} />
    </Container>
  );
}
