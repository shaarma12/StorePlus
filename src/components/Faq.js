import React from "react";
import { FAQ_IMG, FAQ_LIST } from "../constant";
import DropDown from "./DropDown";

const Faq = () => {
  return (
    <div className="xl:w-[84.5%] lg:w-[98%] flex flex-wrap xl:gap-20 lg:gap-16 items-center xl:mx-auto lg:mx-32 my-20">
      <img
        src={FAQ_IMG}
        alt="faqImage"
        className="xl:h-[46.5rem] lg:h-[33rem]"
      />
      <div>
        <p className="text-6xl font-bold text-[#252424] xl:mb-[5.5rem] lg:mb-8">
          FAQ
        </p>
        {FAQ_LIST.map((FAQInfo) => (
          <DropDown key={FAQInfo?.id} dropDownInfo={FAQInfo} />
        ))}
        <p className="xl:text-2xl lg:text-3xl font-semibold text-blue-500 xl:mt-12 lg:mt-5 cursor-pointer">
          View all questions
        </p>
      </div>
    </div>
  );
};

export default Faq;
