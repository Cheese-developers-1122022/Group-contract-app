import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import "./table.css";
import { Badge, Menu, Tooltip } from "@mantine/core";
import { useGetContactUserQuery } from "../../redux/auth/contactApi";
import { useSelector } from "react-redux";

const TableData = () => {
  const { userData } = useSelector((state) => state?.userData);
  const tr = userData?.map((data) => (
    <tr
      key={data?.id}
      className=" shadow hover:bg-[#e0b5ad31] user cursor-pointer"
    >
      <td className="px-3 text-left">
        <div className=" w-10  rounded-full">
          {data?.img ? (
            <img src={data?.img} className=" w-full rounded-full" />
          ) : (
            <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-[#54B435]">
              <p className=" text-white"> {data?.name?.charAt(0)}</p>
            </div>
          )}
        </div>
      </td>
      <td className="px-3 text-left">
        <div className=" py-5">
          <p className=" text-gray-400 text-sm">Name</p>
          <p className=" ">{data?.name}</p>
        </div>
      </td>
      <td className="px-3 text-left">
        {data?.email ? (
          <div className=" py-5">
            <p className=" text-gray-400 text-sm">Email</p>
            <p>{data?.email}</p>
          </div>
        ) : (
          <div></div>
        )}
      </td>
      <td className="px-3 text-left">
        <div className=" py-5">
          <p className=" text-gray-400 text-sm">Phone Number</p>
          <p>{data?.phone}</p>
        </div>
      </td>
      <td className="px-3 text-left">
        <div>
          <p className=" text-gray-400 text-sm">Location</p>
          <p className=" first-letter:uppercase">{data?.address}</p>
        </div>
      </td>
      <td className="px-3 text-left">
        {data?.job ? (
          <div className=" w-[94px] ">
            <p className=" text-center text-gray-400 text-sm "> Job</p>

            <Badge>
              <p className=" first-letter:uppercase text-center">{data?.job}</p>
            </Badge>
          </div>
        ) : (
          <div></div>
        )}
      </td>
      <td className="px-3 text-left">
        <div className=" action flex justify-center items-center gap-3">
          <Tooltip
            label="favorite"
            position="bottom"
            transitionProps={{ transition: "pop", duration: 300 }}
          >
            <button>
              <AiOutlineStar />
            </button>
          </Tooltip>
          <Tooltip
            label="Detail"
            position="bottom"
            transitionProps={{ transition: "pop", duration: 300 }}
          >
            <button>
              <TbListDetails />
            </button>
          </Tooltip>
          <>
            <Menu
              openDelay={50}
              closeDelay={200}
              trigger="hover"
              transitionProps={{ transition: "scale", duration: 500 }}
            >
              <Menu.Target>
                <button>
                  <BsThreeDotsVertical />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item icon={<BiEdit size={20} />}>Edit</Menu.Item>
                <Menu.Item color="red" icon={<MdOutlineDelete size={20} />}>
                  <p className="  pr-10">Delete</p>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </>
        </div>
      </td>
    </tr>
  ));
  return (
    <>
      <tbody>{tr}</tbody>
    </>
  );
};

export default TableData;
