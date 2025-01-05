import React from "react";
import PricingCard from "./PricingCard";
import { PRICING_LIST } from "../constant";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="xl:w-[84.5%] lg:w-[98.5%] xl:ml-[7.5rem] lg:ml-[7.5rem] flex-col justify-center items-center mx-auto"
    >
      <div className="flex justify-center items-center mt-32 mb-[5rem]">
        <p className="text-6xl font-bold text-[#252424]">Pricing</p>
      </div>
      <div className="flex flex-wrap xl:gap-4 lg:gap-6 justify-center items-center">
        {PRICING_LIST.map((pricingData) => (
          <PricingCard key={pricingData?.id} data={pricingData} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
