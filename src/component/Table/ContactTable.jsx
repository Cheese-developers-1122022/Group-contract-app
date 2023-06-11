import React from "react";
import TableHead from "./TableHead";
import TableData from "./TableData";

const ContactTable = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <table className=" border-none w-[100%]">
        <TableHead />
        <TableData />
      </table>
    </div>
  );
};

export default ContactTable;
