import styled from "styled-components";

const StyledSignIn = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image : url("../../../public/images/Background.png");
  background-size: cover;
  background-repeat: no-repeat;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .emailInput {
    display: flex;
    width: 250px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .passwordInput {
    display: flex;
    width: 250px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .forgotPassword {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    text-align: right;
  }
  .login {
    display: flex;
    width: 250px;
    height: 40px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid var(--status-success-500, #16b364);
    background: #03c75a;
  }
  .signupBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .signupQuestion {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 19.2px */
  }
  .signupBtn {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    text-decoration-line: underline;
  }
  .loginBtn {
    margin-top: 20px;
  }

  input {
    margin-bottom: 10px;
    height: 40px;
    border-radius: 4px;
    padding: 10px;
    border: none;
  }

  button {
    margin-bottom: 10px;
  }
`;

export default StyledSignIn;
