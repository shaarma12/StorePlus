import React from "react";
import { HERO_IMG } from "../constant";

const Hero = () => {
  return (
    <div
      id="home"
      className="xl:w-[93%] lg:w-[116%] xl:ml-14 lg:ml-8 xl:h-[65rem] lg:h-[48rem] bg-blue-200 flex justify-center items-center xl:mx-auto lg:mx-8 rounded-2xl mb-2"
    >
      <div className="flex justify-between items-center xl:w-[90%] lg:w-[85%]">
        <div>
          <div className="text-6xl font-semibold mt-8 xl:w-[35rem] lg:w-[30rem]">
            <p className="mb-6">The first platform</p>
            <p>for wholesalers</p>
          </div>
          <div className="my-10 text-2xl font-times w-[29rem] text-[#262626]">
            <p className="break-words">
              StorePlus is a first of its kind platform that connects
              wholesalers and retailers
            </p>
          </div>
          <button className="text-white bg-blue-500 text-xl font-semibold px-5 py-3 rounded-lg">
            Book in Advance
          </button>
        </div>
        <img
          src={HERO_IMG}
          alt="Hero Image"
          className="xl:w-[50rem] lg:w-[40rem] -mr-24"
        />
      </div>
    </div>
  );
};

export default Hero;
