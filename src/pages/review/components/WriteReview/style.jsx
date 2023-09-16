import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledTextField = styled(TextField)`
  background-color: #f0f5fa;
  border-radius: 0.5rem;

  & fieldset {
    border: none;
    outline: none;
  }
`;

export default StyledTextField;
