import React, { useEffect, useState } from "react";
import { Container, Divider, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import Header from "./components/Header";
import Rating from "./components/Rating";
import Rule from "./components/Rule";
import ReviewItem from "./components/ReviewItem";
import WriteReview from "./components/WriteReview";
import { tokenState } from "../../token/tokenState";
import { BACK_URI } from "../../common";

const getReview = async (id, token) => {
  axios.defaults.headers.common.Authorization = `${token}`;
  const reponse = await axios
    .get(`/api/review/${id}`, {
      "Content-Type": "application/json",
      "withCredentials": true,
      "Authorization": token,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
  return reponse;
};

export default function Reveiw() {
  const [isWrite, setIsWrite] = useState(false);
  const [data, setData] = useState(undefined);
  const { id } = useParams();
  const [token] = useRecoilState(tokenState);

  useEffect(() => {
    getReview(id, token).then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container maxWidth="xs" sx={{ pt: "5rem" }}>
      <Header
        title={
          !isWrite
            ? `방문자 리뷰 (${data && data.reviews.length}건)`
            : "리뷰 작성하기"
        }
        isWrite={isWrite}
        setIsWrite={setIsWrite}
      />
      {!isWrite ? (
        <>
          <Rating
            data={{
              rating: data && data.scoreAvg,
              ratingCount: data && data.reviews.length,
              reviews: data && data.reviews,
              recommend: 0.88,
            }}
          />
          <Rule setIsWrite={setIsWrite} />

          <Divider sx={{ mb: 2 }} />

          <Stack spacing={2} divider={<Divider />}>
            {data &&
              data.reviews.map((item) => (
                <ReviewItem
                  data={{
                    username: "USERNAME",
                    email: item.email,
                    description: item.content,
                    rating: item.score,
                    images: [{ idx: 1, url: `${BACK_URI + item.images[0]}` }],
                  }}
                />
              ))}
          </Stack>
        </>
      ) : (
        <WriteReview />
      )}
    </Container>
  );
}
