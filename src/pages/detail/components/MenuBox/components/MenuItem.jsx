import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";
import { Plus } from "@phosphor-icons/react";
import React from "react";
import { primaryColor } from "../../../../../common";

const StyledMenuItem = styled.div`
  width: calc(50% - 0.5rem);
  box-shadow: 12px 12px 30px rgba(150, 150, 154, 0.215);
  padding: 0.75rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & .img {
    width: 100%;
    aspect-ratio: 1.7777;
    border-radius: 1.5rem;
    background-color: #ddd;
  }
  & .title,
  & .cost {
    font-weight: bold;
  }

  & .action {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .action .MuiButtonBase-root {
    background-color: ${primaryColor};
    color: #fff;
    padding: 0.8rem;
  }
`;

export default function MenuItem({ item }) {
  return (
    <StyledMenuItem>
      <div className="img" />

      <div>
        <Typography className="title" variant="subtitle2">
          {item.name}
        </Typography>
        <Typography variant="body2">{item.des}</Typography>
      </div>

      <div className="action">
        <Typography className="cost" variant="subtitle2">
          {item.cost.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}원
        </Typography>
        <IconButton>
          <Plus size={16} />
        </IconButton>
      </div>
    </StyledMenuItem>
  );
}
