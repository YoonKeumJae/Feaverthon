import React from "react";

function SignIn() {
  return (
    <div>
      <h1>SignIn</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <span>{" Don't "} have an account? Sign Up</span>
    </div>
  );
}

export default SignIn;
