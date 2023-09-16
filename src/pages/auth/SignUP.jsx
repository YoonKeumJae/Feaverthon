import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { StyledSignUp } from "../../styles/auth";
import BackBtn from "../../assets/BackBtn";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate();

  const moveToSignIn = () => {
    navigate("/auth/signin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!email || !password || !checkPassword) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post(
        "https://port-0-halalservice-4fju66f2clmknyb54.sel5.cloudtype.app/auth/signup",
        { email, password },
        {
          "Content-Type": "application/json",
          "withCredentials": true,
        },
      );
      if (response.status === 201) {
        navigate("/auth/signin");
      }
    } catch (err) {
      console.error("회원가입 실패", err);
    }
  };
  return (
    <StyledSignUp>
      <div className="header">
        <button type="button" onClick={moveToSignIn} className="back">
          <BackBtn />
        </button>
        <div className="title">회원가입</div>
      </div>
      <form>
        <span>이메일</span>
        <input
          type="email"
          placeholder="hello@halal.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <span>비밀번호 확인</span>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setCheckPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit} className="submit">
          회원가입
        </button>
      </form>
    </StyledSignUp>
  );
}
