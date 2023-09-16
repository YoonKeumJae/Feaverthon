import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackBtn from "../../assets/BackBtn";

const LanguageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 24px;

  .header {
    margin-top: 26px;
    display: flex;
    flex-direction: row;
  }
  .title {
    margin-left: 16px;
    margin-top: 12px;
    color: #181c2e;
    font-family: Noto Sans KR;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 129.412% */
  }
  .body {
    width: 327px;
    height: 150px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #f6f8fa;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 65px;
  }
  .checkbox {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    margin: 0px;
  }
  .backBtn {
    background: none;
    border: none;
  }
  input {
    width: 20px;
    height: 20px;
  }
`;

function Language() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <LanguageWrapper>
      <div className="header">
        <button type="button" className="backBtn" onClick={goBack}>
          <BackBtn />
        </button>
        <div className="title">다국어 지원</div>
      </div>
      <div className="body">
        <div className="checkbox">
          <input type="radio" name="language" checked="checked" />
          한국어
        </div>
        <div className="checkbox">
          <input type="radio" name="language" />
          English
        </div>
      </div>
    </LanguageWrapper>
  );
}

export default Language;
