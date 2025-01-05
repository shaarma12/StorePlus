import React from "react";
import FeatureCard from "./FeatureCard";
import { FEATURES_LIST } from "../constant";

const Features = () => {
  return (
    <div
      id="feature"
      className="xl:w-[84.5%] lg:w-[98.5%] xl:ml-[7.5rem] lg:ml-[7.5rem] flex-col justify-center items-center mx-auto"
    >
      <div className="flex flex-col justify-center items-center mt-[13.4rem]">
        <p className="text-blue-500 xl:text-2xl lg:text-3xl font-semibold tracking-[0.35em] mb-2">
          FEATURES
        </p>
        <p className="text-6xl font-bold mb-7 text-[#252424]">
          Providing you with flexible
        </p>
        <p className="text-6xl font-bold text-[#252424] -ml-5">
          and feasible features
        </p>
      </div>
      <div className="mt-28 flex flex-wrap xl:gap-8 lg:gap-8 justify-center items-center xl:w-full lg:w-full">
        {FEATURES_LIST.map((data) => (
          <FeatureCard key={data?.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Features;
