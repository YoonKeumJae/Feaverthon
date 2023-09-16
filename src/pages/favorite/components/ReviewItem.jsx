import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";
import { Heart, Star } from "@phosphor-icons/react";

const StyledRevieItem = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .img {
    height: 7rem;
    background-color: #ddd;
    aspect-ratio: 1/1;
    border-radius: 20px;
  }

  .title .titleLabel * {
    display: inline-block;
    margin-right: 0.75rem;
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
  .title .MuiIconButton-root {
    padding: 6px;
  }

  .contact,
  .reviewLabel {
    color: #838e9a;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

function ReviewItem({ title, category, address, tel, rating, reviews }) {
  return (
    <StyledRevieItem>
      <div className="img" />
      <div className="info">
        <div className="title">
          <div className="titleLabel">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2">{category}</Typography>
          </div>
          <IconButton>
            <Heart size={20} />
          </IconButton>
        </div>
        <div className="contact">
          <Typography className="address" variant="body2">
            {address}
          </Typography>
          <Typography className="tel" variant="body2">
            {tel}
          </Typography>
        </div>
        <div className="detail">
          <div className="rating">
            <Star weight="fill" color="#EFBC06" />
            <Typography variant="subtitle2">{rating}</Typography>
            <Typography variant="body2" className="reviewLabel">
              ({reviews} Review{reviews === 1 ? "" : "s"})
            </Typography>
          </div>
        </div>
      </div>
    </StyledRevieItem>
  );
}

// typescript 대용..
ReviewItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default ReviewItem;
