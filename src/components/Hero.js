import React from "react";
import { HERO_IMG } from "../constant";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-[93%] h-[65rem] bg-blue-200 flex justify-center items-center mx-auto rounded-2xl mb-2"
    >
      <div className="flex justify-between items-center w-[90%]">
        <div>
          <div className="text-6xl font-semibold mt-8">
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
        <img src={HERO_IMG} alt="Hero Image" className="w-[50rem] -mr-24" />
      </div>
    </div>
  );
};

export default Hero;
