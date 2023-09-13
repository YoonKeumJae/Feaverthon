import React from "react";
import StyledSignIn from "./styles/auth/signIn/StyledSignIn";

function SignIn() {
  return (
    <StyledSignIn>
      <h1>SignIn</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <span>{" Don't "} have an account? Sign Up</span>
    </StyledSignIn>
  );
}

export default SignIn;
