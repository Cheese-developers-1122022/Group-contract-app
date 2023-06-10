import React from "react";
import { AiFillYuque } from "react-icons/ai";
import { Input } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-[#f5f5c9] ">
      <div className=" flex items-center justify-between container mx-auto px-5">
        <div className=" w-3/12 py-2 ">
          <Input icon={<BsSearch />} placeholder="Your email" size="sm" />
        </div>
        <div className="w-2/12">
          <AiFillYuque className=" text-4xl text-[#00DFA2] " />
        </div>
        <div className="w-4/12">
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
