import React from "react";
import Navbar from "./Navbar/Navbar";
import Siderbar from "./Navbar/Sidebar";
import ContactTable from "./Table/ContactTable";
import PaginationButton from "./PaginationButton";
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className=" flex ">
        <Siderbar />
        <ContactTable />
      </div>
      <PaginationButton />
    </div>
  );
};

export default Home;
