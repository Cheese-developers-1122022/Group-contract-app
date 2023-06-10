import React, { useEffect, useState } from "react";
import { useLogoutMutation } from "./src/redux/auth/authApi";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeUser } from "./src/redux/services/userSlice";
import {
  useGetContactUserPage2Query,
  useGetContactUserQuery,
} from "./src/redux/auth/contactApi";

const TestingMain = () => {
  const [logout, { isLoading }] = useLogoutMutation();
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const nav = useNavigate();
  

  
  //0
  const [count, setCount] = useState(6);
  const user = JSON.parse(Cookies.get("user"));
  const { data: item } = useGetContactUserQuery({token , count});
  console.log(item);
  // console.log(item?.contacts.data);
  //

  const logoutButtonHandler = async () => {
    const { data } = await logout(token);
    try {
      if (data.success) nav("/login");
      dispatch(removeUser());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      Testing Main Page
      <div className="">
        <button
          disabled={isLoading && true}
          onClick={logoutButtonHandler}
          className="px-3 py-1 bg-blue-800 text-2xl"
        >
          LogOut
        </button>
      </div>
      <button>Next</button>
    </div>
  );
};

export default TestingMain;
