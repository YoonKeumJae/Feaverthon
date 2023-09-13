import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography, styled } from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import primaryColor from "../../../common";

const StyledHeader = styled(AppBar)`
  background-color: #fff;
  max-width: 444px;

  left: 50%;
  transform: translateX(-50%);

  .MuiToolbar-root {
    gap: 1rem;
  }
  .MuiToolbar-root .MuiIconButton-root {
    background-color: ${primaryColor};
    color: #fff;
    padding: 0.8rem;
  }
  .MuiToolbar-root .MuiTypography-root {
    color: #222;
  }
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader elevation={0}>
      <Toolbar>
        <IconButton onClick={() => navigate(-1)}>
          <CaretLeft size={12} />
        </IconButton>
        <Typography variant="subtitle1">즐겨찾기</Typography>
      </Toolbar>
    </StyledHeader>
  );
}
