import React from "react";
import { LOGO_IMG } from "../constant";
import { Link } from "react-scroll";
import { Link as Redirect } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      id="navbar"
      className="xl:w-[84%] lg:w-[117%] md:w-[145%] lg:ml-6 md:ml-7 xl:h-[7rem] lg:h-[9rem] md:h-[11rem] flex justify-between items-center xl:mx-auto md:mx-auto"
    >
      <div className="flex w-[14.5rem] justify-between">
        <img
          className="xl:h-9 lg:h-10 md:h-14 xl:mt-1 lg:mt-1 md:mt-0"
          src={LOGO_IMG}
          alt="logo"
        />
        <p className="font-times xl:text-4xl lg:text-4xl md:text-5xl font-semibold text-blue-500">
          StorePlus
        </p>
      </div>
      <div className="flex justify-between items-center xl:w-[38rem] lg:w-[34rem] md:w-[36rem]">
        <div className="flex justify-between w-[26rem] font-times">
          <Link to="home" smooth={true} duration={500}>
            <p className="xl:text-xl lg:text-xl md:text-2xl font-semibold cursor-pointer">
              Home
            </p>
          </Link>
          <Link to="feature" smooth={true} duration={500}>
            <p className="xl:text-xl lg:text-xl md:text-2xl font-semibold cursor-pointer">
              Features
            </p>
          </Link>
          <Link to="pricing" smooth={true} duration={500}>
            <p className="xl:text-xl lg:text-xl md:text-2xl font-semibold cursor-pointer">
              Pricing
            </p>
          </Link>
          <Redirect to="/query_screen">
            <p className="xl:text-xl lg:text-xl md:text-2xl font-semibold cursor-pointer">
              Contact Us
            </p>
          </Redirect>
        </div>
        <Redirect
          to="/login_screen"
          className="bg-blue-500 text-white xl:text-xl lg:text-xl md:text-2xl font-semibold xl:px-5 lg:px-5 md:px-6 xl:py-3 lg:py-4 md:py-5 rounded-lg"
        >
          Log in
        </Redirect>
      </div>
    </div>
  );
};

export default Navbar;
