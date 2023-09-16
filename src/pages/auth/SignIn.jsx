import React from "react";
import { StyledSignIn } from "../../styles/auth";
import { Logo, Hello, Hala } from "../../assets/auth";

function SignIn() {
  return (
    <StyledSignIn>
      <Logo />
      <div className="title">
        <Hello />
        <Hala />
      </div>
      <h1>로그인</h1>
      <div className="body">
        <form>
          <input type="email" placeholder="이메일" className="emailInput" />
          <input
            type="password"
            placeholder="비밀번호"
            className="passwordInput"
          />
          <span className="forgotPassword">비밀번호를 잊어버리셨나요?</span>
          <button type="submit" className="login">
            로그인
          </button>
        </form>
        <div className="signupBox">
          <span className="signupQuestion">헬로할랄 회원이 아니신가요?</span>
          <span className="signupBtn"> 회원가입</span>
        </div>
      </div>
    </StyledSignIn>
  );
}

export default SignIn;
