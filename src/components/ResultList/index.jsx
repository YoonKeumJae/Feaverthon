import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "@phosphor-icons/react";

import InList from "./List";

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
  {
    title: "뉴살라딘4",
    category: "인도음식",
    address: "대구광역시 달서구 계대동문로 173",
    tel: "053-123-1234",
    rating: 4.9,
    reviews: 2,
    location: "대구",
  },
  {
    title: "뉴살라딘5",
    category: "인도음식",
    address: "대구광역시 달서구 계대동문로 174",
    tel: "053-123-1234",
    rating: 4.9,
    reviews: 2,
    location: "대구",
  },
];

const StyledSlider = styled(Slider)`
  & .slideItem {
    padding: 1rem;
  }
  & .slideItem > div {
    background-color: #fff;
    padding: 0.5rem;
  }
  & .slideItem div:nth-child(1) {
    border-radius: 1rem 1rem 0 0;
    border-bottom: 1px solid #ddd;
  }

  & .slideItem div:nth-child(2) {
    border-radius: 0 0 1rem 1rem;
  }
`;

function DemoPaper() {
  const settings = {
    useCSS: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "calc(100svh - 7rem)",
        top: "0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "1000px",
          bottom: "3rem",
          zIndex: "9999",
        }}
      >
        <StyledSlider {...settings}>
          {restaurant.map((item) => (
            <div
              className="slideItem"
              style={{
                backgroundColor: "#fff",
                margin: "0 20px",
                width: "300px",
                height: "200px",
                borderRadius: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width={100}
                  height={100}
                  style={{ backgroundColor: "#ddd", marginLeft: "-30px" }}
                />
                <div style={{ marginLeft: "30px" }}>
                  <p style={{ marginTop: "20px" }}>
                    <b>{item.title}</b>
                  </p>
                  <p style={{ marginTop: "-2px" }}>{item.category}</p>
                  <p>
                    <Star size={24} color="#ffff00" weight="fill" />
                    {item.rating}({item.reviews})
                  </p>
                </div>
              </div>
              <InList />
            </div>
          ))}
        </StyledSlider>
      </div>
    </div>
  );
}

export default function ResultList(props) {
  const ListBox = styled.div`
    display: flex;
  `;

  return (
    <ListBox>
      <DemoPaper />
    </ListBox>
  );
}
