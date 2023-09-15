import React from "react";
import styled from "@emotion/styled";
import { Star } from "@phosphor-icons/react";
import { Typography } from "@mui/material";

const StyledConetnt = styled.div`
  padding: 1.5rem;
  .rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .rating .label {
    text-decoration: underline;
  }

  .title * {
    display: inline-block;
    margin-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.25rem;
  }
  .title .category {
    color: #838e9a;
  }
  .description {
    color: #a0a5ba;
  }
`;

export default function Content({ content }) {
  return (
    <StyledConetnt>
      <div className="rating">
        <Star weight="fill" color="#EFBC06" />{" "}
        <Typography variant="subtitle2" className="label">
          3.8 (5.3)
        </Typography>
      </div>
      <div className="title">
        <Typography variant="h6" className="title">
          뉴살라딘
        </Typography>
        <Typography variant="body2" className="category">
          인도음식
        </Typography>
      </div>
      <Typography variant="body2" className="description">
        대구 달서구 계대동문에 위치한 뉴살라딘입니다. 현지 경력 10년이상의
        네팔,파키스탄 요리사가 직접요리하는 인도 오리지날 정통커리입니다
      </Typography>
    </StyledConetnt>
  );
}
