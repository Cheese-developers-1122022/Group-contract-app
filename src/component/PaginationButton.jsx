import React, { useEffect, useState } from "react";
import { useGetContactUserQuery } from "../redux/auth/contactApi";
import Cookies from "js-cookie";
import { Text, Pagination } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/UserSlice";

const PaginationButton = () => {
  //   const token = Cookies.get("token");
  const token = "416|pqOoA7aRY69T0YLF5pOJTiGgvNHwvtuVl03LUI1L";
  const [count, setCount] = useState(1);
  // console.log(token);
  const { data: users } = useGetContactUserQuery({ token, count });
  const userData = users?.contacts?.data;
  console.log(userData);
  const dispatch = useDispatch();
  const data = useSelector((state) => console.log(state));
  useEffect(() => {
    dispatch(addUser(userData));
  }, [userData, count]);
  return (
    <div>
      <Pagination
        color="green"
        radius="xl"
        total={users?.contacts?.last_page}
        value={count}
        onChange={setCount}
      />
    </div>
  );
};

export default PaginationButton;
