import { React, useState } from "react";
import { StyledSignUp } from "../../styles/auth";
import BackBtn from "../../assets/BackBtn";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isDuplicatedEmail, setIsDuplicatedEmail] = useState(false); // [TODO] 이메일
  const [password, setPassword] = useState("");
  const [isSamePassword, setIsSamePassword] = useState(true);

  // 비밀번호 입력 칸 변화를 감지함
  function inputPassword(e) {
    setPassword(e.target.value);
  }

  // 비밀번호 확인 칸 변화를 감지함
  function checkPassword(e) {
    if (password === e.target.value) {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false);
    }
  }

  // 이메일 유효성 검사
  function validateEmail(emailToCheck) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(emailToCheck);
  }

  // 이메일 입력 칸 변화를 감지함
  function handleEmailChange(event) {
    setEmail(event.target.value);
    setIsValidEmail(validateEmail(email));
  }

  // 중복된 이메일인지 확인
  function checkDuplicatedEmail() {
    // 이메일 중복 체크 로직 만들어야함
    setIsDuplicatedEmail(true);
  }

  //   return (
  //     <StyledSignUp>
  //       <div className="header">
  //         <BackBtn />
  //         <h1>회원가입</h1>
  //       </div>
  //       <form>
  //         <div className="text">이름</div>
  //         <input type="text" placeholder="홍길동" />
  //         <div className="text">Email</div>
  //         <input type="email" placeholder="Email" onChange={handleEmailChange} />
  //         {!isValidEmail && (
  //           <span className="warn">이메일 형식이 올바르지 않습니다.</span>
  //         )}
  //         <button
  //           type="button"
  //           onClick={checkDuplicatedEmail}
  //           disabled={!isDuplicatedEmail}
  //         >
  //           중복 체크
  //         </button>
  //         <span className="text">Password</span>
  //         <input
  //           type="password"
  //           placeholder="Password"
  //           onChange={inputPassword}
  //         />
  //         <input
  //           type="password"
  //           placeholder="Password Check"
  //           onChange={checkPassword}
  //         />
  //         {!isSamePassword && (
  //           <span className="warn">비밀번호가 일치하지 않습니다.</span>
  //         )}
  //         <button type="submit">Sign In</button>
  //       </form>
  //     </StyledSignUp>
  //   );

  return (
    <StyledSignUp>
      <div className="header">
        <BackBtn />
        <div className="title">회원가입</div>
      </div>
      <form>
        <span>이메일</span>
        <input type="email" placeholder="hello@halal.com" />
        <span>비밀번호</span>
        <input type="password" placeholder="password" />
        <span>비밀번호 확인</span>
        <input type="password" placeholder="password" />
        <button type="submit">회원가입</button>
      </form>
    </StyledSignUp>
  );
}

export default SignUp;
