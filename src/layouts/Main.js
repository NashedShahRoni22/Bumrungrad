import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../shared/AppBar/AppBar";
import MiddleBar from "../shared/FixedBar/MiddleBar";
import SideBar from "../shared/FixedBar/SideBar";
import BottomBar from "../shared/AppBar/BottomBar";

export default function Main() {
  return (
    <main>
      <AppBar />
      <Outlet />
      <div className="fixed bottom-2 min-w-full z-50">
        <MiddleBar />
      </div>
      <div className="fixed right-2 top-1/2 z-50">
        <SideBar />
      </div>
      <BottomBar/>
    </main>
  );
}
