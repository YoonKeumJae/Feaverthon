import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
  background-color: #f0f5fa;
  border-radius: 0.5rem;

  & fieldset {
    border: none;
    outline: none;
  }
`;

export const StyledImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  text-align: center;
`;
