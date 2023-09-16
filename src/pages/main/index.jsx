import React from "react";

import { styled } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";
import { Paper, Stack } from "@mui/material";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "40vw",
  height: "20rem",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function Main(props) {
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
      location: "대구",
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      indicators={false}
      navButtonsAlwaysVisible={true}
      animation="slide"
    >
      {restaurant.map((item, i) => (
        <Stack mr={3}>
          <Item key={i} item={item} />
        </Stack>
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DemoPaper elevation={1} variant="outlined" square={false}>
        <h2>{props.item.title}</h2>
        <p>{props.item.category}</p>
        <p>
          {props.item.rating}({props.item.reviews})
        </p>
      </DemoPaper>
    </div>
  );
}
