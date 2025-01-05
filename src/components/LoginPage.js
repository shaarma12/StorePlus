import React, { useState } from "react";
import { LOGIN_LOGO, LOGO_NAME } from "../constant";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
    setErrorMessage("User doesn't exist. Try wholesaler account.");
    setEmail("");
  };

  return (
    <div className="h-full flex">
      <div className="w-[50%] bg-blue-500">
        <div className="ml-28">
          <img src={LOGO_NAME} alt="logo name" className="py-9" />
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://img.icons8.com/?size=100&id=85304&format=png&color=FFFFFF"
                alt="arrow"
                className="w-7 h-7"
              />
            </Link>
            <Link to="/">
              <p className="text-white text-lg tracking-wide ml-2 font-semibold">
                Back
              </p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center pt-[9.5rem] pb-[13.25rem]">
          <img src={LOGIN_LOGO} alt="LoginLogo" />
        </div>
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="py-16">
          <p className="text-5xl font-semibold py-9">Welcome Back!</p>
          <p className="text-[#252424] text-lg">Login to Your Account</p>
          <form onSubmit={handleSubmit} className="mt-8">
            <p className="text-[#252424] text-lg">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={error ? errorMessage : "Email"}
              required
              className={`bg-[#f0f0f0] py-3 w-[24rem] px-6 my-3 border-2 text-lg text-[#252424] rounded-xl placeholder:text-lg placeholder:px-0 ${
                error
                  ? "border-red-500 placeholder:text-red-500"
                  : "border-none outline-none"
              }`}
              disabled={error}
            />
            <p className="text-[#252424] text-lg">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="bg-[#f0f0f0] py-3 w-[24rem] px-6 border-none outline-none text-lg text-[#252424] my-3 rounded-xl placeholder:text-lg"
            />
            <div className="flex justify-end items-end py-1">
              <p className="text-red-500 text-sm tracking-wider cursor-pointer">
                Forgot password?
              </p>
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-[24rem] py-3 text-white text-xl font-semibold rounded-lg my-12"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
