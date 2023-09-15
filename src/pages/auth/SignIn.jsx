import React from "react";
<<<<<<< HEAD:src/pages/auth/signIn/SignIn.jsx
import StyledSignIn from "../../../styles/auth/StyledSignIn";
=======
import { StyledSignIn } from "../../styles/auth";
>>>>>>> feature/auth:src/pages/auth/SignIn.jsx

function SignIn() {
  return (
    <StyledSignIn>
      <h1>SignIn</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <span>Forgot Password?</span>
        <button type="submit">Sign In</button>
        <button type="button">Sign In with Naver</button>
      </form>
      <span>{" Don't "}you have an account?</span>
      <span>Sign Up</span>
    </StyledSignIn>
  );
}

export default SignIn;
