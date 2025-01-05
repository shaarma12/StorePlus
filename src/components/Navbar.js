import React from "react";
import { LOGO_IMG } from "../constant";
import { Link } from "react-scroll";
import { Link as Redirect } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      id="navbar"
      className="w-[84%] h-[7rem] flex justify-between items-center mx-auto"
    >
      <div className="flex w-[14.5rem] justify-between">
        <img className="h-9 mt-1" src={LOGO_IMG} alt="logo" />
        <p className="font-times text-4xl font-semibold text-blue-500">
          StorePlus
        </p>
      </div>
      <div className="flex justify-between items-center w-[38rem]">
        <div className="flex justify-between w-[26rem] font-times">
          <Link to="home" smooth={true} duration={500}>
            <p className="text-xl font-semibold cursor-pointer">Home</p>
          </Link>
          <Link to="feature" smooth={true} duration={500}>
            <p className="text-xl font-semibold cursor-pointer">Features</p>
          </Link>
          <Link to="pricing" smooth={true} duration={500}>
            <p className="text-xl font-semibold cursor-pointer">Pricing</p>
          </Link>
          <Redirect to="/query_screen">
            <p className="text-xl font-semibold cursor-pointer">Contact Us</p>
          </Redirect>
        </div>
        <Redirect
          to="/login_screen"
          className="bg-blue-500 text-white text-xl font-semibold px-5 py-3 rounded-lg"
        >
          Log in
        </Redirect>
      </div>
    </div>
  );
};

export default Navbar;
