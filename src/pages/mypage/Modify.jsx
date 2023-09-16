import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackBtn from "../../assets/BackBtn";

const ModifyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    width: 100%;
    margin-bottom: 36px;
  }
  .backBtn {
    background: none;
    border: none;
  }
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  input {
    width: 327px;
    height: 62px;
    flex-shrink: 0;
    background-color: #f0f5fa;
    border-radius: 16px;
    border: none;
    margin-bottom: 16px;
  }
  .modifyTitle {
    text-align: start;
    color: #32343e;

    /* new header */
    font-family: Sen;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 8px;
    margin-left: 12px;
  }
  .submit {
    width: 327px;
    height: 62px;
    flex-shrink: 0;
    background-color: #09762a;
    color: #fff;
    text-align: center;
    font-family: Sen;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    border-radius: 16px;
    margin-top: 24px;
  }
`;

function Modify() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <ModifyWrapper>
      <div className="header">
        <button type="button" className="backBtn" onClick={goBack}>
          <BackBtn />
        </button>
        <span>나의 회원정보 수정</span>
      </div>
      <div className="profile">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          alt="profile"
          className="image"
        />
      </div>
      <div className="inputForm">
        <form>
          <span className="modifyTitle">이메일</span>
          <input type="email" placeholder="이메일" />
          <span className="modifyTitle">새 비밀번호</span>
          <input type="password" placeholder="새 비밀번호" />
          <span className="modifyTitle">새 비밀번호 확인</span>
          <input type="password" placeholder="새 비밀번호" />
          <button type="submit" className="submit" onClick={goBack}>
            저장하기
          </button>
        </form>
      </div>
    </ModifyWrapper>
  );
}

export default Modify;
