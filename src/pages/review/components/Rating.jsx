import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Star } from "@phosphor-icons/react";
import axios from "axios";
import React, { useEffect } from "react";
import primaryColor from "../../../common";

const StyledRatingSheet = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  & .ratingLabel {
    width: 7rem;
  }

  & .ratingLabel .subLabel {
    color: #a8a8a8;
  }

  & .ratingPoint {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
  }

  & .ratingChart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }
  & .ratingChart .MuiTypography-root {
    line-height: 0.5rem;
  }
  & .ratingChart > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }

  & .ratingChart .gaugeConatiner {
    width: 100%;
    height: 0.5rem;
    border-radius: 3px;
    overflow: hidden;
    background-color: #f2f2f2;
  }

  & .ratingChart .gaugeConatiner .gauge {
    background-color: ${primaryColor};
    height: 100%;
  }
`;

const ratingFrequency = [4, 6, 2, 4, 3];
export default function Rating({ data }) {
  // useEffect(() => {
  //   axios
  //     .post(
  //       "https://port-0-halalservice-4fju66f2clmknyb54.sel5.cloudtype.app/auth/signup",
  //       { email: "asd", password: "asd" },
  //       {
  //         "withCredentials": true,
  //         "Content-Type": "application/json",
  //       },
  //     )
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // });
  return (
    <StyledRatingSheet>
      <div className="ratingLabel">
        <div>
          <div className="ratingPoint">
            <Typography variant="h6">{data.rating}</Typography>
            <Star weight="fill" color="#EFBC06" />
          </div>
          <Typography variant="caption" className="subLabel">
            {data.ratingCount}건의 리뷰
          </Typography>
        </div>
        <div>
          <Typography variant="h6">
            {Math.round(data.recommend * 100)}%
          </Typography>
          <Typography variant="caption" className="subLabel">
            추천 비율
          </Typography>
        </div>
      </div>
      <div className="ratingChart">
        {ratingFrequency.map((item, idx) => (
          <div key={item.toString()}>
            <Typography>{Math.abs(idx - 5)}</Typography>
            <div className="gaugeConatiner">
              <div className="gauge" style={{ width: `${item}rem` }} />
            </div>
          </div>
        ))}
      </div>
    </StyledRatingSheet>
  );
}
