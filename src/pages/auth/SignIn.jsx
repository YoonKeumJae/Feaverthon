import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../../token/tokenState";
import { StyledSignIn } from "../../styles/auth";
import { Logo, Hello, Hala } from "../../assets/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useRecoilState(tokenState);

  const navigate = useNavigate();

  const moveToSignUp = () => {
    navigate("/auth/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post(
        "https://port-0-halalservice-4fju66f2clmknyb54.sel5.cloudtype.app/auth/signin",
        { email, password },
        {
          "Content-Type": "application/json",
          "withCredentials": true,
        },
      );
      if (response.status === 200) {
        // console.log(response.data.access_token);
        setToken(response.data.access_token);
        navigate("/");
      }
    } catch (err) {
      alert(err.response.data.access_token);
      // console.error("로그인 실패", err);
    }
  };
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
          <input
            type="email"
            placeholder="이메일"
            className="emailInput"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="passwordInput"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="login" onClick={handleSubmit}>
            로그인
          </button>
        </form>
        <div className="signupBox">
          <span className="signupQuestion">헬로할랄 회원이 아니신가요?</span>
          <span aria-hidden="true" className="signupBtn" onClick={moveToSignUp}>
            회원가입
          </span>
        </div>
      </div>
    </StyledSignIn>
  );
}

export default SignIn;
