import React from "react";
import styled from "@emotion/styled";
import Carousel from "react-material-ui-carousel";

const list = [
  { idx: 1, src: "https://via.placeholder.com/450.jpg" },
  { idx: 2, src: "https://via.placeholder.com/450.jpg" },
  { idx: 3, src: "https://via.placeholder.com/450.jpg" },
  { idx: 4, src: "https://via.placeholder.com/450.jpg" },
];

const StyledImg = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-position: center;
  background-size: cover;
`;

const StyledCarousel = styled(Carousel)`
  border-radius: 0 0 24px 24px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1/1;
`;

export default function Images() {
  return (
    <StyledCarousel
      swipe
      animation="slide"
      autoPlay={false}
      indicatorIconButtonProps={{
        style: {
          padding: "1px",
          color: "#fff5",
          fontSize: "1.2rem",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#fff",
          border: "1px solid #fff",
        },
      }}
      indicatorContainerProps={{
        style: {
          top: "87%",
          position: "absolute",
          zIndex: 90,
        },
      }}
    >
      {list.map((item) => (
        <StyledImg
          key={item.idx}
          style={{ backgroundImage: `url(${item.src})` }}
          alt="img"
        />
      ))}
    </StyledCarousel>
  );
}
