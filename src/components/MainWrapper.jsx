import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function MainWrapper() {
  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  );
}
