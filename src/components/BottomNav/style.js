import styled from "@emotion/styled";
import { IconButton, alpha } from "@mui/material";
import primaryColor from "../../common";

export const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  max-width: 444px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;

  .MuiIconButton-root.menuIcon {
    padding: 0.5rem 0.7rem;
  }
`;

export const StyledCenterButton = styled(IconButton)`
  background-color: ${primaryColor};
  padding: 1rem;
  color: #fff;
  box-shadow: 0px 2px 7px ${alpha(primaryColor, 0.7)};
`;
