import React from "react";
import Login from "./component/Login";
import Register from "./component/Register";
import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar/Navbar";
import CreateContact from "./component/CreateContext";
import ContactTable from "./component/Table/ContactTable";
import Home from "./component/Home";
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateContact />} />
        <Route path="/table" element={<ContactTable />} />
      </Routes>
    </div>
  );
};

export default App;
