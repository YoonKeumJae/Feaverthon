import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ReviewItemContainer = styled.div`
  padding: 1.5rem 0;

  & .rule {
    padding-top: 0.5rem;
  }
`;

export const MoreRule = styled(Typography)`
  color: #42a5f5;
  text-decoration: underline;
`;

export const StyledReviewItem = styled.div`
  & .reviewHeader {
    display: flex;
    justify-content: space-between;
  }
  & .reviewerInfo {
    display: flex;
    gap: 1rem;
  }
  & .reviewerInfo .email {
    color: rgba(0, 0, 0, 0.38);
  }

  & .reviewContent .title {
    padding: 0.5rem 0;
  }
  & .reviewContent .images {
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }
  & .reviewContent .images .imageItem {
    width: 20%;
    aspect-ratio: 1/1;
    background-position: center;
    background-size: cover;
    border-radius: 0.3rem;
  }
`;
