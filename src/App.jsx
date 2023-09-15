// import React from "react";
// import { RecoilRoot } from "recoil";
// import Router from "./Router";

// function App() {
//   return (
//     <RecoilRoot>
//       <Router />
//     </RecoilRoot>
//   );
// }

// export default App;

import React from "react";
import { Container } from "@mui/material";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <Container maxWidth="xs">
      <SignUp />
    </Container>
  );
}

export default App;
