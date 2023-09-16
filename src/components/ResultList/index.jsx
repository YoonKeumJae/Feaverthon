import React from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";

import InList from "./List";

export default function ResultList(props) {
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
  const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;

    position: relative;
    width: 30vw;
    height: 10rem;
    bottom: 12rem;

    border-radius: 30px;
    background-color: white;
    max-width: 444px;
    padding: 1rem 1.5rem;
    margin: 0 20px;
    z-index: 9999;
  `;
  const ListBox = styled.div`
    display: flex;
  `;

  return (
    <ListBox>
      <Carousel
        navButtonsAlwaysVisible={true}
        indicators={false}
        autoPlay={false}
        swipe={true}
        gutter={5}
        style={{ zindex: "999" }}
      >
        {restaurant.map((item) => (
          <List style={{ width: "30vw", height: "100px" }}>
            <Item item={item} />
          </List>
        ))}
      </Carousel>
    </ListBox>
  );
}

function Item(props) {
  console.log(props.item.title);
  console.log(props.item.category);
  console.log(props.item.address);
  console.log(props.item.rating);
  return (
    <>
      {props.item.title}
      <p>{props.item.category}</p>
      <InList />
    </>
  );
}
