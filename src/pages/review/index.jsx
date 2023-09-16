import React, { useState } from "react";
import { Container, Divider, Stack } from "@mui/material";
import Header from "./components/Header";
import Rating from "./components/Rating";
import Rule from "./components/Rule";
import ReviewItem from "./components/ReviewItem";
import WriteReview from "../WriteReview";

export default function Reveiw() {
  const [isWrite, setIsWrite] = useState(false);
  return (
    <Container maxWidth="xs" sx={{ pt: "5rem" }}>
      <Header
        title={!isWrite ? `방문자 리뷰 (${54}건)` : "리뷰 작성하기"}
        isWrite={isWrite}
        setIsWrite={setIsWrite}
      />
      {!isWrite ? (
        <>
          <Rating data={{ rating: 3.7, ratingCount: 35, recommend: 0.88 }} />
          <Rule setIsWrite={setIsWrite} />

          <Divider sx={{ mb: 2 }} />

          <Stack spacing={2} divider={<Divider />}>
            <ReviewItem
              data={{
                username: "hello",
                email: "asdasd@gmail.com",
                title: "입대 10일 전, 후회 없는 선택” 🍯💯",
                description:
                  "이미 유명한 맛집이라서 맛은 믿고 갔어요! 세 메뉴로 먹으면 정말 배부르게 먹을 수 있답니다 💗 매장도 넓어서 쾌적하게 식사하고 올 수 있었어요. 마크니 커리에 버터 난 찍어먹으면 진짜 존맛입니다 👍",
                rating: 4.2,
                images: [
                  { idx: 1, url: "https://via.placeholder.com/450.jpg" },
                  { idx: 2, url: "https://via.placeholder.com/450.jpg" },
                  { idx: 3, url: "https://via.placeholder.com/450.jpg" },
                  { idx: 4, url: "https://via.placeholder.com/450.jpg" },
                ],
              }}
            />
            <ReviewItem
              data={{
                username: "hello",
                email: "asdasd@gmail.com",
                title: "입대 10일 전, 후회 없는 선택” 🍯💯",
                description:
                  "이미 유명한 맛집이라서 맛은 믿고 갔어요! 세 메뉴로 먹으면 정말 배부르게 먹을 수 있답니다 💗 매장도 넓어서 쾌적하게 식사하고 올 수 있었어요. 마크니 커리에 버터 난 찍어먹으면 진짜 존맛입니다 👍",
                rating: 4.2,
                images: [
                  { idx: 1, url: "https://via.placeholder.com/450.jpg" },
                  { idx: 2, url: "https://via.placeholder.com/450.jpg" },
                  { idx: 3, url: "https://via.placeholder.com/450.jpg" },
                  { idx: 4, url: "https://via.placeholder.com/450.jpg" },
                ],
              }}
            />
          </Stack>
        </>
      ) : (
        <WriteReview />
      )}
    </Container>
  );
}
