import React from "react";
import { LOGO_IMG } from "../constant";

const Navbar = () => {
  return (
    <div className="w-[84%] h-[7rem] flex justify-between items-center mx-auto">
      <div className="flex w-[14.5rem] justify-between">
        <img className="h-9 mt-1" src={LOGO_IMG} alt="logo" />
        <p className="font-times text-4xl font-semibold text-blue-500">
          StorePlus
        </p>
      </div>
      <div className="flex justify-between items-center w-[38rem]">
        <div className="flex justify-between w-[26rem] font-times">
          <p className="text-xl font-semibold cursor-pointer">Home</p>
          <p className="text-xl font-semibold cursor-pointer">Features</p>
          <p className="text-xl font-semibold cursor-pointer">Pricing</p>
          <p className="text-xl font-semibold cursor-pointer">Contact Us</p>
        </div>
        <button className="bg-blue-500 text-white text-xl font-semibold px-5 py-3 rounded-lg">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
