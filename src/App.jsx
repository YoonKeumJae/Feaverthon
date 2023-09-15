import React from "react";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import "./index.css";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
