import { Container } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import Images from "./components/Images";
import Content from "./components/Content";

const tempData = {
  title: "뉴살라딘",
  category: "인도음식",
  rating: 4.5,
  ratingCount: 53,
  description:
    " 대구 달서구 계대동문에 위치한 뉴살라딘입니다. 현지 경력 10년이상의 네팔,파키스탄 요리사가 직접요리하는 인도 오리지날 정통커리입니다 현지 경력 10년이상의 네팔,파키스탄 요리사가 직접요리하는 인도 오리지날 정통커리입니다현지 경력 10년이상의 네팔,파키스탄 요리사가 직접요리하는 인도 오리지날 정통커리입니다",
};

export default function Detail() {
  return (
    <Container maxWidth="xs" sx={{ px: "0 !important" }}>
      <Header />

      <Images />

      <Content data={tempData} />
    </Container>
  );
}
