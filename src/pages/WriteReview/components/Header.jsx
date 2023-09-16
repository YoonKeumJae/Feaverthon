import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography, styled } from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import primaryColor from "../../../common";

const StyledHeader = styled(AppBar)`
  background-color: #fff;
  max-width: 444px;
  left: 50%;
  top: 0rem;
  transform: translateX(-50%);

  .MuiToolbar-root {
    justify-content: space-between;

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

  & .title {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader elevation={0}>
      <Toolbar>
        <div className="title">
          <IconButton onClick={() => navigate(-1)}>
            <CaretLeft size={12} />
          </IconButton>
          <Typography variant="h6">리뷰 작성하기</Typography>
        </div>
      </Toolbar>
    </StyledHeader>
  );
}
