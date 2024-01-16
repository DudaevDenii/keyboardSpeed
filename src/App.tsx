import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./modules/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
