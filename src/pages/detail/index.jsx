import { Container } from "@mui/material";
import { React, useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Images from "./components/Images";
import Content from "./components/Content";
import MenuBox from "./components/MenuBox";
import { tokenState } from "../../token/tokenState";

// const tempData = {
//   title: "뉴살라딘",
//   category: "인도음식",
//   rating: 4.5,
//   ratingCount: 53,
//   description:
//     " 대구 달서구 계대동문에 위치한 뉴살라딘입니다. 현지 경력 10년이상의 네팔,파키스탄 요리사가 직접요리하는 인도 오리지날 정통커리입니다 현지 경력 10년이상의 네팔,파키스탄 요리사가 직접요리하는 인도 오리지날 정통커리입니다현지 경력 10년이상의 네팔,파키스탄 요리사가 직접요리하는 인도 오리지날 정통커리입니다",
// };

export default function Detail() {
  const [data, setData] = useState({});
  const keystate = tokenState.key;
  console.log(keystate);

  useEffect(() => {
    async function getDetail() {
      try {
        const response = await axios.get(
          "https://port-0-halalservice-4fju66f2clmknyb54.sel5.cloudtype.app/store/1",
          {
            Authrization: key,
          },
        );
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.error("가게 상세 정보 조회 실패", err);
      }
    }
    getDetail();
  }, []);

  return (
    <Container maxWidth="xs" sx={{ px: "0 !important" }}>
      <Header />

      <Images />

      <Content data={data} />

      <MenuBox />
    </Container>
  );
}
