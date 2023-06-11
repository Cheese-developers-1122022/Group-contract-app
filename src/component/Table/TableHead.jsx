import React from "react";

const TableHead = () => {
  return (
    <>
      <thead>
        <tr>
          <th className=" mr-5  rounded-lg      rounded-r    bg-slate-100 text-[#357686b7]  text-left py-5  px-3 uppercase"></th>
          <th className=" mr-5  rounded-lg      rounded-r    bg-slate-100 text-[#357686b7]  text-left py-5  px-3 uppercase">
            Name
          </th>
          <th className=" mr-5  rounded-lg      rounded-r    bg-slate-100 text-[#357686b7]  px-3  text-left py-5 uppercase">
            Email
          </th>
          <th className=" mr-5   borer   rounded-lg   rounded-r    bg-slate-100 text-[#357686b7]  px-3  text-left py-5 uppercase">
            Phone Number
          </th>
          <th className=" mr-5     rounded-lg   rounded-r    bg-slate-100 text-[#357686b7]  px-3  text-left py-5 uppercase">
            Location
          </th>
          <th className=" mr-5     rounded-lg   rounded-r    bg-slate-100 text-[#357686b7]  px-3  text-left py-5 uppercase">
            Job
          </th>
          <th className=" mr-5     rounded-lg    rounded-r   bg-slate-100 text-[#357686b7]  px-3  text-left py-5 uppercase">
            Actions
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
