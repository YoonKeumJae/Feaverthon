import { Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { List } from "@phosphor-icons/react";
import Header from "./conponents/Header";
import BottomNav from "../../components/BottomNav";
import ReviewItem from "./conponents/ReviewItem";

const tab = ["전체", "대구", "경북", "서울", "부산"];
const restaurant = [
  {
    title: "뉴살라딘",
    category: "인도음식",
    address: "대구광역시 달서구 계대동문로 17",
    tel: "053-123-1234",
    rating: 4.9,
    reviews: 10,
  },
  {
    title: "뉴살라딘2",
    category: "인도음식",
    address: "대구광역시 달서구 계대동문로 172",
    tel: "053-123-1234",
    rating: 4.9,
    reviews: 1,
  },
  {
    title: "뉴살라딘3",
    category: "인도음식",
    address: "대구광역시 달서구 계대동문로 172",
    tel: "053-123-1234",
    rating: 4.9,
    reviews: 2,
  },
];

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

      <Typography sx={{ py: 2, px: 3 }}>
        전체 즐겨찾기 {restaurant.length}개{" "}
      </Typography>

      {restaurant.map((item) => (
        <ReviewItem
          title={item.title}
          category={item.category}
          address={item.address}
          tel={item.tel}
          rating={item.rating}
          reviews={item.reviews}
        />
      ))}

      <BottomNav centerMenu={centerMenu} setCenterMenu={setCenterMenu} />
    </Container>
  );
}
