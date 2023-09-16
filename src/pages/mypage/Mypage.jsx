/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import BackBtn from "../../assets/BackBtn";

const MypageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    width: 112px;
    height: 45px;
    position: absolute;
    top: 50px;
    left: 24px;
  }

  .backBtn {
    background: none;
    border: none;
  }

  .title {
    padding-left: 16px;
    color: #181c2e;
    font-family: Noto Sans KR;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 129.412% */
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 12px;
    left: 45px;
    width: 100%;
  }

  .profile {
    width: 327px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-bottom: 30px;
  }

  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 20px;
  }

  .userEmail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #32343e;
    font-family: Sen;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .userSetting {
    width: 327px;
    height: 204px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #f6f8fa;
    margin-bottom: 23px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .userSettingIcon {
    width: 40px;
    height: 40px;
  }
  .userSettingContent {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
  }
  .userSettingTitle {
    margin-left: 14px;
    width: 224px;
    color: #32343e;
    font-family: Sen;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }
  .appSetting {
    width: 327px;
    height: 155px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #f6f8fa;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
  }
  .appSettingContent {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
  }
  .appSettingTitle {
    margin-left: 14px;
    width: 224px;
    color: #32343e;
    font-family: Sen;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }
  .rightArrow {
    display: flex;
    height: 24px;
    flex-direction: row;
    align-items: center;
  }
`;

function Mypage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const setLanguage = (e) => {
    e.preventDefault();
    navigate("/mypage/language");
  };
  const modify = (e) => {
    e.preventDefault();
    navigate("/mypage/modify");
  };
  const favorite = (e) => {
    e.preventDefault();
    navigate("/favorite");
  };
  return (
    <MypageWrapper>
      <div className="header">
        <button type="button" onClick={goBack} className="backBtn">
          <BackBtn />
        </button>
        <span className="title">내 정보</span>
      </div>
      <div className="profile">
        <img
          className="profile-img"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          alt="profile-img"
        />
        <div className="userEmail">hello@hallal.com</div>
      </div>
      <div className="userSetting">
        <div className="userSettingContent" onClick={modify}>
          <svg
            className="userSettingIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="19.5" fill="white" stroke="white" />
            <path
              d="M26 27V25.3333C26 24.4493 25.6839 23.6014 25.1213 22.9763C24.5587 22.3512 23.7956 22 23 22H17C16.2044 22 15.4413 22.3512 14.8787 22.9763C14.3161 23.6014 14 24.4493 14 25.3333V27"
              stroke="#FB6F3D"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 19C21.6569 19 23 17.6569 23 16C23 14.3431 21.6569 13 20 13C18.3431 13 17 14.3431 17 16C17 17.6569 18.3431 19 20 19Z"
              stroke="#FB6F3D"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="userSettingTitle">나의 회원정보 수정</span>
          <svg
            className="rightArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 16L15 12L11 8"
              stroke="#747783"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="userSettingContent">
          <svg
            className="userSettingIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="white" />
            <path
              d="M24 14C23.4696 14 22.9609 14.2107 22.5858 14.5858C22.2107 14.9609 22 15.4696 22 16V24C22 24.5304 22.2107 25.0391 22.5858 25.4142C22.9609 25.7893 23.4696 26 24 26C24.5304 26 25.0391 25.7893 25.4142 25.4142C25.7893 25.0391 26 24.5304 26 24C26 23.4696 25.7893 22.9609 25.4142 22.5858C25.0391 22.2107 24.5304 22 24 22H16C15.4696 22 14.9609 22.2107 14.5858 22.5858C14.2107 22.9609 14 23.4696 14 24C14 24.5304 14.2107 25.0391 14.5858 25.4142C14.9609 25.7893 15.4696 26 16 26C16.5304 26 17.0391 25.7893 17.4142 25.4142C17.7893 25.0391 18 24.5304 18 24V16C18 15.4696 17.7893 14.9609 17.4142 14.5858C17.0391 14.2107 16.5304 14 16 14C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16C14 16.5304 14.2107 17.0391 14.5858 17.4142C14.9609 17.7893 15.4696 18 16 18H24C24.5304 18 25.0391 17.7893 25.4142 17.4142C25.7893 17.0391 26 16.5304 26 16C26 15.4696 25.7893 14.9609 25.4142 14.5858C25.0391 14.2107 24.5304 14 24 14Z"
              stroke="#2AE1E1"
              stroke-width="1.28571"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="userSettingTitle">내가 작성한 리뷰 관리</div>
          <svg
            className="rightArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 16L15 12L11 8"
              stroke="#747783"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="userSettingContent">
          <svg
            className="userSettingIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="19.5" fill="white" stroke="white" />
            <path
              d="M25.9205 15.0609C25.5784 14.7246 25.1722 14.4578 24.7252 14.2757C24.2782 14.0937 23.799 14 23.3151 14C22.8312 14 22.3521 14.0937 21.905 14.2757C21.458 14.4578 21.0518 14.7246 20.7098 15.0609L19.9998 15.7586L19.2899 15.0609C18.5989 14.3818 17.6617 14.0004 16.6845 14.0004C15.7073 14.0004 14.7702 14.3818 14.0792 15.0609C13.3882 15.7399 13 16.6609 13 17.6212C13 18.5816 13.3882 19.5026 14.0792 20.1816L14.7891 20.8793L19.9998 26L25.2105 20.8793L25.9205 20.1816C26.2627 19.8454 26.5342 19.4463 26.7194 19.007C26.9047 18.5677 27 18.0968 27 17.6212C27 17.1457 26.9047 16.6748 26.7194 16.2355C26.5342 15.7962 26.2627 15.3971 25.9205 15.0609V15.0609Z"
              stroke="#B33DFB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="userSettingTitle" onClick={favorite}>나의 즐겨찾기 목록</div>
          <svg
            className="rightArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 16L15 12L11 8"
              stroke="#747783"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="appSetting">
        <div className="appSettingContent" onClick={setLanguage}>
          <svg
            className="appSettingIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="19.5" fill="white" stroke="white" />
            <path
              d="M13.9962 19.0125C14.1888 16.8099 15.6738 14.9777 17.6885 14.2788C17.5448 14.517 17.4148 14.7807 17.2986 15.0629C16.8667 16.1117 16.5931 17.4948 16.5445 19.0125H13.9962ZM19.5 13C15.9101 13 13 15.9102 13 19.5C13 23.0898 15.9101 26 19.5 26C23.0898 26 26 23.0899 26 19.5C26 15.9101 23.0898 13 19.5 13ZM19.5 13.975C19.6699 13.975 19.8773 14.0566 20.1144 14.3001C20.3529 14.5451 20.5902 14.925 20.7998 15.4341C21.1755 16.3465 21.4316 17.5987 21.4799 19.0125H17.52C17.5684 17.5987 17.8245 16.3465 18.2002 15.4341C18.4098 14.925 18.6471 14.5451 18.8856 14.3001C19.1227 14.0566 19.3301 13.975 19.5 13.975ZM22.4555 19.0125C22.4069 17.4948 22.1333 16.1117 21.7014 15.0629C21.5852 14.7807 21.4552 14.517 21.3115 14.2788C23.3262 14.9777 24.8112 16.8099 25.0038 19.0125H22.4555ZM21.4799 19.9875C21.4316 21.4013 21.1755 22.6535 20.7998 23.5659C20.5902 24.075 20.3529 24.4549 20.1144 24.6999C19.8773 24.9434 19.6699 25.025 19.5 25.025C19.3301 25.025 19.1227 24.9434 18.8856 24.6999C18.6471 24.4549 18.4098 24.075 18.2002 23.5659C17.8245 22.6535 17.5684 21.4013 17.52 19.9875H21.4799ZM21.3115 24.7212C21.4552 24.483 21.5852 24.2193 21.7014 23.9371C22.1333 22.8883 22.4069 21.5052 22.4555 19.9875H25.0038C24.8112 22.1901 23.3262 24.0223 21.3115 24.7212ZM17.6885 24.7212C15.6738 24.0223 14.1888 22.1901 13.9962 19.9875H16.5445C16.5931 21.5052 16.8667 22.8883 17.2986 23.9371C17.4148 24.2193 17.5448 24.483 17.6885 24.7212Z"
              fill="#192435"
            />
          </svg>
          <div className="appSettingTitle">다국어 지원</div>
          <svg
            className="rightArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 16L15 12L11 8"
              stroke="#747783"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="appSettingContent">
          <svg
            className="appSettingIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="white" />
            <path
              d="M19.5514 28C24.2175 28 28.0001 24.2174 28.0001 19.5514C28.0001 14.8853 24.2175 11.1027 19.5514 11.1027C14.8854 11.1027 11.1028 14.8853 11.1028 19.5514C11.1028 24.2174 14.8854 28 19.5514 28Z"
              stroke="#FB6D3A"
              stroke-width="1.67823"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.0931 17.0166C17.2918 16.4519 17.6838 15.9758 18.1999 15.6725C18.7159 15.3692 19.3226 15.2584 19.9126 15.3596C20.5025 15.4608 21.0377 15.7675 21.4231 16.2254C21.8086 16.6833 22.0196 17.2629 22.0187 17.8614C22.0187 19.5512 19.4841 20.396 19.4841 20.396"
              stroke="#FB6D3A"
              stroke-width="1.67823"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.552 23.7339H19.56"
              stroke="#FB6D3A"
              stroke-width="1.67823"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="appSettingTitle">1:1 문의</div>
          <svg
            className="rightArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 16L15 12L11 8"
              stroke="#747783"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <BottomNav />
    </MypageWrapper>
  );
}

export default Mypage;
