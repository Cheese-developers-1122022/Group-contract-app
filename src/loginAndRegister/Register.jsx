import React, { useState } from "react";
import RegisterAnimation from "./RegisterAnimation";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../redux/auth/authApi";

const Register = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, password, password_confirmation };
      const data = await register(user);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen relative bg-white/50 ">
      <div className=" bg-white/30 backdrop-blur-sm border  rounded-md p-3 md:p-5 shadow flex flex-col items-center gap-1 w-[350px] sm:w-[400px] md:w-[600px] xl:w-[700px] ">
        <div className=" flex flex-col items-center gap-1">
          <h1 className=" text-2xl md:text-3xl font-semibold text-gray-800">
            Register
          </h1>
          <p className=" text-gray-600 font-medium  md:text-lg text-center leading-5">
            Register your account to continue using our website
          </p>
        </div>
        <div className="flex items-center">
          <div className="">
            <form
              action=""
              onSubmit={onSubmitHandler}
              className=" flex flex-col gap-1 items-center sm:items-baseline  md:gap-2"
            >
              <div className="flex flex-col md:gap-1">
                <label htmlFor="name" className=" text-gray-500">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-[250px] md:w-[280px] xl:w-[300px] px-4 py-1 border border-gray-400 bg-white/30  rounded-md focus-visible:outline-blue-400 "
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col md:gap-1">
                <label htmlFor="name" className=" text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[250px] md:w-[280px] xl:w-[300px] px-4 py-1 border border-gray-400 bg-white/30 rounded-md focus-visible:outline-blue-400 "
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col md:gap-1">
                <label htmlFor="name" className=" text-gray-500">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[250px] md:w-[280px] xl:w-[300px] px-4 py-1 border border-gray-400 bg-white/30 rounded-md focus-visible:outline-blue-400 "
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex flex-col md:gap-1">
                <label htmlFor="name" className=" text-gray-500">
                  Confirm password
                </label>
                <input
                  type="password"
                  value={password_confirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  className="w-[250px] md:w-[280px] xl:w-[300px] px-4 py-1 border border-gray-400 bg-white/30 rounded-md focus-visible:outline-blue-400 "
                  placeholder="Confirm your password"
                />
              </div>
              <div className="flex mr-9 md:mr-0 mt-2 gap-1">
                <p className="text-gray-500 mt-1 leading-4 ">
                  Already have an account?
                </p>
                <Link>
                  <p className=" text-blue-500  underline underline-offset-3">
                    sign in
                  </p>
                </Link>
              </div>
              <div className="flex self-start  md:block md:ml-0 ">
                <button
                  className=" px-4 py-1 bg-sky-500 text-white rounded-md"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="w-[0] md:w-[50%] xl:w-[60%]">
            <RegisterAnimation />
          </div>
        </div>
      </div>
      <div className="absolute w-[55%] sm:[w-60%] md:hidden -z-50">
        <RegisterAnimation />
      </div>
    </div>
  );
};

export default Register;
