import { React, useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

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

  // 이메일 중복 체크 로직 만들어야함

  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <span>Email</span>
        <input type="email" placeholder="Email" onChange={handleEmailChange} />
        {!isValidEmail && <span>이메일 형식이 올바르지 않습니다.</span>}
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Password Check" />
        <button type="submit">Sign In</button>
      </form>
      <span>{" Don't "} have an account? </span>
      <span>Sign Up</span> {/* 이 부분을 클릭하면 SignIn 페이지로 이동 */}
    </div>
  );
}

export default SignUp;
