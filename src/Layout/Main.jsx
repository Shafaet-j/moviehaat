import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="  min-h-[calc(100vh-200px)] bg-[#0c1e35]">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
