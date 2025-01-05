import React from "react";
import { LOGO_IMG } from "../constant";

const Footer = () => {
  return (
    <div className="w-full bg-black bg-opacity-[0.025] flex justify-center h-auto">
      <div className="flex justify-between w-[84%] py-[5.6rem]">
        <div className="flex w-[14.5rem] justify-between">
          <img className="h-9 mt-1" src={LOGO_IMG} alt="logo" />
          <p className="font-times text-4xl font-semibold text-blue-500">
            StorePlus
          </p>
        </div>
        <div className="mt-2">
          <div className="flex gap-24 justify-evenly text-xl font-semibold tracking-wide text-[#777676]">
            <p className="cursor-pointer">Back to Top</p>
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Features</p>
            <p className="cursor-pointer">Pricing</p>
            <p className="cursor-pointer">Contact Us</p>
          </div>
          <div className="break-words text-[#7e7e7e] mt-[5.6rem] -ml-6">
            <p className="w-48">
              &#169; All Rights Reserved By Almach Labs Pvt. Ltd.
            </p>
            <p className="w-[30rem]">
              4-53/5 ANANDHA NAGAR COLONY PALLEVELUPULA BHEEMARAM Warangal,
              Telangana, 506015 India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
