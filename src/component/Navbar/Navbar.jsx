import React from "react";
import { FcFeedback } from "react-icons/fc";
import { Input } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import Toggle from "./Toggle";
import { Avatar } from "@mantine/core";
import { useContextCustom } from "../../context/DarkContext";
const Navbar = () => {
  const { darkTheme, lightSwitch } = useContextCustom();
  return (
    <div className="bg-[#f5f5c9] dark:bg-[#3a3838] ">
      <div className=" flex dark:text-white items-center justify-between container mx-auto px-5">
        <div className=" w-3/12 py-2 ">
          <Input icon={<BsSearch />} placeholder="Your email" size="sm" />
        </div>
        <div className="w-2/12 flex gap-3 justify-center items-center">
          <FcFeedback className=" text-4xl " />
          <h2 className=" text-2xl">Hi</h2>
        </div>
        <div className="w-3/12 justify-end flex gap-4 items-center">
          <Avatar size="md" color="green" radius="lg">
            MK
          </Avatar>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
