import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Star } from "@phosphor-icons/react";
import React from "react";

const StyledRevieItem = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .img {
    height: 7rem;
    background-color: #ddd;
    aspect-ratio: 1/1;
    border-radius: 20px;
  }

  .title * {
    display: inline-block;
    margin-right: 0.75rem;
  }

  .contact,
  .reviewLabel {
    color: #838e9a;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default function ReviewItem() {
  return (
    <StyledRevieItem>
      <div className="img" />
      <div className="info">
        <div className="title">
          <Typography variant="h6">뉴살라딘</Typography>
          <Typography variant="body2">인도음식</Typography>
        </div>
        <div className="contact">
          <Typography className="address" variant="body2">
            대구광역시 달서구 계대동문로 17
          </Typography>
          <Typography className="tel" variant="body2">
            053-123-1234
          </Typography>
        </div>
        <div className="detail">
          <div className="rating">
            <Star weight="fill" color="#EFBC06" />
            <Typography variant="subtitle2">4.9</Typography>
            <Typography variant="body2" className="reviewLabel">
              (10 Reviews)
            </Typography>
          </div>
        </div>
      </div>
    </StyledRevieItem>
  );
}
