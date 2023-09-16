/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function DemoPaper() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "100vh",
          top: "0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "1000px",
            bottom: "11rem",
            zIndex: "9999",
          }}
        >
          <Slider {...settings}>
            {restaurant.map((item) => (
              <>
                <div
                  style={{
                    backgroundColor: "white",
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
                      style={{ marginLeft: "-30px" }}
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
              </>
            ))}
          </Slider>
        </div>
      </div>
    </>
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
