import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../shared/AppBar/AppBar";
import MiddleBar from "../shared/FixedBar/MiddleBar";
import SideBar from "../shared/FixedBar/SideBar";

export default function Main() {
  return (
    <main>
      <AppBar />
      <Outlet />
      <div className="fixed bottom-5 min-w-full">
        <MiddleBar />
      </div>
      <div className="fixed right-2 top-1/2">
        <SideBar/>
      </div>
    </main>
  );
}
