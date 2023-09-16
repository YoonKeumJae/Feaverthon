import React from "react";
import { RecoilRoot } from "recoil";
import Router from "./Router";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;

// import React from "react";
// import SignIn from "./pages/auth/SignIn";

// function App() {
//   return <SignIn />;
// }
// export default App;
