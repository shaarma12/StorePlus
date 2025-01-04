import React from "react";
import { FAQ_IMG } from "../constant";
import DropDown from "./DropDown";

const Faq = () => {
  return (
    <div className="w-[84.5%] flex flex-wrap gap-20 items-center mx-auto my-20">
      <img src={FAQ_IMG} alt="faqImage" className="h-[46.5rem]" />
      <div>
        <p className="text-6xl font-bold text-[#252424] mb-[5.5rem]">FAQ</p>
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <p className="text-2xl font-semibold text-blue-500 mt-12 cursor-pointer">
          View all questions
        </p>
      </div>
    </div>
  );
};

export default Faq;
