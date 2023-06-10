import React from "react";
import Login from "./component/Login";
import Register from "./component/Register";
import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar/Navbar";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
      //   <Route path="/" element={<Login />} />
      //   <Route path="/register" element={<Register />} />
      // </Routes>
    </div>
  );
};

export default App;
