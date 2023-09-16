import { Rating, Typography } from "@mui/material";
import React from "react";
import { StyledReviewItem } from "../style";

export default function ReviewItem({ data }) {
  return (
    <StyledReviewItem>
      <div className="reviewHeader">
        <div className="reviewerInfo">
          <Typography variant="subtitle2" className="username">
            {data.username}
          </Typography>
          <Typography variant="subtitle2" className="email">
            {data.email}
          </Typography>
        </div>
        <Rating value={data.rating} precision={0.5} />
      </div>
      <div className="reviewContent">
        <Typography variant="subtitle1" className="title">
          {data.title}
        </Typography>
        <Typography variant="body2" className="description">
          {data.description}
        </Typography>
        <div className="images">
          {data.images.map((item) => (
            <div
              key={item.idx}
              className="imageItem"
              style={{ backgroundImage: `url(${item.url})` }}
            />
          ))}
        </div>
      </div>
    </StyledReviewItem>
  );
}
