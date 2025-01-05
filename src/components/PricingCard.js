import React from "react";
import { POLY } from "../constant";

const PricingCard = ({ data }) => {
  const { price, trailExpiry, infoPoints } = data;
  return (
    <div className="flex flex-col items-center xl:w-[26rem] lg:w-[20rem] bg-black bg-opacity-[0.05] rounded-xl mb-7">
      <div className="flex flex-col justify-center items-center bg-white my-2 xl:px-[6.7rem] lg:px-[3.5rem] rounded-tl-xl rounded-tr-xl pt-[2.4rem] pb-7">
        <div className="flex justify-center items-baseline">
          <p className="xl:text-6xl lg:text-5xl xl:font-bold lg:font-semibold text-[#252424]">
            {price}
          </p>
          <p className="xl:text-3xl lg:text-2xl text-[#979696]">/mo</p>
        </div>
        <p className="text-lg tracking-wide mt-2 xl:font-medium lg:font-semibold text-[#262626]">
          {trailExpiry}
        </p>
      </div>
      <div className="flex flex-col my-5">
        {infoPoints.map((info) => (
          <div
            key={info?.id}
            className="flex justify-center items-center xl:-ml-20 lg:ml-5 mb-3"
          >
            <img
              src={POLY}
              alt="Polygon Pointer"
              className="xl:mr-3 lg:mr-4 lg:w-5"
            />
            <p className="xl:text-lg lg:text-xl xl:font-normal lg:font-medium tracking-wide text-[#262626]">
              {info?.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="bg-blue-500 xl:px-[8.5rem] lg:px-[4.5rem] py-[0.8rem] text-white xl:text-xl lg:text-2xl font-semibold rounded-lg my-4">
          Choose Plan
        </button>
        <p className="mt-2 mb-7 text-lg text-[#262626] tracking-wide">
          *Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
