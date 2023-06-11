import { Badge, Modal, Tooltip } from "@mantine/core";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsGlobeAmericas } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

const Detail = () => {
  const [opened, { open, close }] = useDisclosure(false);

  // const [file, setFile] = (useState < File) | (null > null);
  const location = useLocation();
  const data = location?.state?.data;
  console.log(data);
  return (
    <div className=" w-[80%] mt-10 rounded-xl shadow-xl mx-auto">
      <div className=" flex  w-[80%] mt-5 justify-between ">
        <div className=" flex p-5  items-center gap-5">
          <div className="" onClick={open}>
            {data?.img ? (
              <img src={data?.img} className="w-32 h-32 rounded-full " alt="" />
            ) : (
              <p className=" w-32 h-32 text-xl rounded-full bg-orange-500 flex justify-center items-center">
                {data?.name?.charAt(0)}
              </p>
            )}
          </div>
          <Modal
            title={<p className="text-lg font-semibold">Photo</p>}
            opened={opened}
            withCloseButton
            onClose={close}
            transitionProps={{
              transition: "fade",
              duration: 400,
              timingFunction: "linear",
            }}
            radius={"0.7rem"}
          >
            <div className=" flex justify-center items-center">
              {data?.img ? (
                <img
                  src={data?.img}
                  className="w-32 h-32 rounded-full "
                  alt=""
                />
              ) : (
                <p className=" w-32 h-32 text-xl rounded-full bg-orange-500 flex justify-center items-center">
                  {data?.name?.charAt(0)}
                </p>
              )}
            </div>
            <div className=" flex justify-center items-center flex-col">
              <p className=" text-lg font-bold mt-5 my-2">{data?.name}</p>
              <p>{data?.email}</p>
            </div>
            {/* <Group position="center">
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => <Button {...props}>Upload image</Button>}
            </FileButton>
          </Group> */}

            {/* {file && (
            <Text size="sm" align="center" mt="sm">
              Picked file: {file.name}
            </Text>
          )} */}
          </Modal>

          <div>
            <div>
              <p className=" my-2 text-2xl ">{data?.name}</p>
              <p className=" mb-2">{data?.email}</p>
              <Badge>{data?.job}</Badge>
            </div>
          </div>
        </div>
        <div className=" p-5 ">
          <button className=" px-7 py-1 rounded bg-blue-500 text-white ">
            Edit
          </button>
        </div>
      </div>

      <div className=" pl-10  mt-5 flex  gap-5 items-center">
        <div className="p-2 bg-slate-100 shadow-md shadow-cyan-200 rounded-full">
          <Tooltip
            label="Phone"
            className="text-sm"
            color="dark"
            position="bottom"
            withArrow
            arrowSize={6}
            transitionProps={{ transition: "pop", duration: 300 }}
            closeDelay={100}
          >
            <div className="">
              <a href={"tel:" + data?.phone} className="">
                <BsTelephone
                  className={`${
                    data?.phone ? "text-blue-500" : "text-slate-400"
                  } cursor-pointer text-xl`}
                />
              </a>
            </div>
          </Tooltip>
        </div>
        <div className="p-2 bg-slate-100 shadow-md shadow-cyan-200 rounded-full">
          <Tooltip
            label="Location"
            className="text-sm"
            color="dark"
            position="bottom"
            withArrow
            arrowSize={6}
            transitionProps={{ transition: "pop", duration: 300 }}
            closeDelay={100}
          >
            <div className="">
              <a
                href={`https://www.google.com/maps/search/${data?.address}`}
                className=""
              >
                <BsGlobeAmericas
                  className={`${
                    data?.phone ? "text-blue-500" : "text-slate-400"
                  } cursor-pointer text-xl`}
                />
              </a>
            </div>
          </Tooltip>
        </div>
        <div className="p-2 bg-slate-100 shadow-md shadow-cyan-200 rounded-full">
          <Tooltip
            label="Email"
            className="text-sm"
            color="dark"
            position="bottom"
            withArrow
            arrowSize={6}
            transitionProps={{ transition: "pop", duration: 300 }}
            closeDelay={100}
          >
            <div className="">
              <AiOutlineMail
                className={`${
                  data?.email ? "text-blue-500" : "text-slate-400"
                } cursor-pointer text-xl`}
              />
            </div>
          </Tooltip>
        </div>
        <div className="p-2 bg-slate-100 shadow-md shadow-cyan-200 rounded-full">
          <Tooltip
            label="Email"
            className="text-sm"
            color="dark"
            position="bottom"
            withArrow
            arrowSize={6}
            transitionProps={{ transition: "pop", duration: 300 }}
            closeDelay={100}
          >
            <div className="">
              <AiOutlineMail
                className={`${
                  data?.email ? "text-blue-500" : "text-slate-400"
                } cursor-pointer text-xl`}
              />
            </div>
          </Tooltip>
        </div>
        <div className="p-2 bg-slate-100 shadow-md shadow-cyan-200 rounded-full">
          <Tooltip
            label="Email"
            className="text-sm"
            color="dark"
            position="bottom"
            withArrow
            arrowSize={6}
            transitionProps={{ transition: "pop", duration: 300 }}
            closeDelay={100}
          >
            <div className="">
              <AiOutlineMail
                className={`${
                  data?.email ? "text-blue-500" : "text-slate-400"
                } cursor-pointer text-xl`}
              />
            </div>
          </Tooltip>
        </div>
      </div>
      <hr className=" my-5 w-[80%] ml-8" />

      <div className=" shadow p-5">
        <p className=" text-2xl font-bold text-gray-500"> Contact Detail</p>
        <div className=" flex justify-start  gap-40 mt-10">
          <div className=" flex flex-col gap-5">
            <div>
              <p className="  text-gray-500">Name</p>
              <p className=" text-lg">{data?.name}</p>
            </div>
            <div>
              <p className="  text-gray-500">Phone</p>
              <a href={"tel:" + data?.phone} className="text-blue-400">
                {data?.phone}
              </a>
            </div>
            <div>
              <p className="  text-gray-500">Email</p>
              <p className="flex items-center">
                <Link
                  to={`https://mail.google.com/mail/u/?authuser=${data?.email}`}
                  className="text-blue-400"
                >
                  {data?.email}
                </Link>
              </p>
            </div>
            <div>
              <p className="  text-gray-500">Job</p>
              <p className=" text-lg">{data?.job}</p>
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <div>
              <p className="  text-gray-500">Address</p>
              <p className=" text-lg">{data?.address}</p>
            </div>
            <div>
              <p className="  text-gray-500">Birthday</p>
              <p className=" text-lg">{data?.birthday}</p>
            </div>
            <div>
              <p className="  text-gray-500">Note</p>
              <p className=" text-lg">{data?.note}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
