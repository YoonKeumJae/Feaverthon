import { Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { List } from "@phosphor-icons/react";
import Header from "./conponents/Header";
import BottomNav from "../../components/BottomNav";
import ReviewItem from "./conponents/ReviewItem";

// const tab = ["전체", "대구", "경북", "서울", "부산"];
const restaurant = [
  {
    title: "뉴살라딘",
    category: "인도음식",
    address: "대구광역시 달서구 계대동문로 17",
    tel: "053-123-1234",
    rating: 4.9,
    reviews: 10,
    location: "대구",
  },
  {
    title: "뉴살라딘2",
    category: "인도음식",
    address: "대구광역시 달서구 계대동문로 172",
    tel: "053-123-1234",
    rating: 4.9,
    reviews: 1,
    location: "대구",
  },
  {
    title: "뉴살라딘3",
    category: "인도음식",
    address: "대구광역시 달서구 계대동문로 172",
    tel: "053-123-1234",
    rating: 4.9,
    reviews: 2,
    location: "부산",
  },
];

export default function Favorites() {
  // 현재 이름순으로 정렬되어 있는데 추후 데이터량 기준으로 정렬 필요할듯
  const [tab] = useState(
    Object.keys(
      Object.fromEntries(
        restaurant.map((item) => item.location).map((v) => [v, null]),
      ),
    ),
  );
  const [tabIndex, setTabIndex] = useState(0);
  const [centerMenu, setCenterMenu] = useState({
    path: "/",
    icon: <List />,
  });

  // useEffect(() => {
  //   console.log(tab);
  // }, [tab]);

  // useEffect(() => {
  //   console.log(tab[tabIndex - 1]);
  // }, [tabIndex]);

  return (
    <Container maxWidth="xs" sx={{ p: 0, pt: 7 }}>
      <Header />

      {/* 지역 카테고리 */}
      <Tabs
        value={tabIndex}
        onChange={(e, newValue) => {
          setTabIndex(newValue);
        }}
      >
        {["전체"].concat(tab).map((item) => (
          <Tab label={item} key={item} />
        ))}
      </Tabs>

      <Typography sx={{ py: 2, px: 3 }}>
        전체 즐겨찾기 {restaurant.length}개{" "}
      </Typography>

      {/* 식당 리스트 */}
      {tabIndex === 0
        ? // 전체 지역
          restaurant.map((item) => {
            return (
              <ReviewItem
                key={item.title}
                title={item.title}
                category={item.category}
                address={item.address}
                tel={item.tel}
                rating={item.rating}
                reviews={item.reviews}
              />
            );
          })
        : restaurant
            .filter(({ location }) => location === tab[tabIndex - 1])
            .map((item) => (
              <ReviewItem
                key={item.title}
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
