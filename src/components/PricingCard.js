import React from "react";
import { POLY } from "../constant";

const PricingCard = ({ data }) => {
  const { price, trailExpiry, infoPoints } = data;
  return (
    <div className="flex flex-col items-center w-[26rem] bg-black bg-opacity-[0.05] rounded-xl mb-7">
      <div className="flex flex-col justify-center items-center bg-white my-2 px-[6.7rem] rounded-tl-xl rounded-tr-xl pt-[2.4rem] pb-7">
        <div className="flex justify-center items-baseline">
          <p className="text-6xl font-bold text-[#252424]">{price}</p>
          <p className="text-3xl text-[#979696]">/mo</p>
        </div>
        <p className="text-lg tracking-wide mt-2 text-[#262626]">
          {trailExpiry}
        </p>
      </div>
      <div className="flex flex-col my-5">
        {infoPoints.map((info) => (
          <div
            key={info?.id}
            className="flex justify-center items-center -ml-20 mb-3"
          >
            <img src={POLY} alt="Polygon Pointer" className="mr-3" />
            <p className="text-lg tracking-wide text-[#262626]">{info?.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="bg-blue-500 px-[8.5rem] py-[0.8rem] text-white text-xl font-semibold rounded-lg my-4">
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
