import styled from "styled-components";

const StyledSignUp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-bottom: 10px;
  }

  .warn {
    color: red;
  }
`;

export default StyledSignUp;
