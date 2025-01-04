import React from "react";
import FeatureCard from "./FeatureCard";
import { FEATURES_LIST } from "../constant";

const Features = () => {
  return (
    <div className="w-[84.5%] flex-col justify-center items-center mx-auto">
      <div className="flex flex-col justify-center items-center mt-[13.4rem]">
        <p className="text-blue-500 text-2xl font-semibold tracking-[0.35em] mb-2">
          FEATURES
        </p>
        <p className="text-6xl font-bold mb-7 text-[#252424]">
          Providing you with flexible
        </p>
        <p className="text-6xl font-bold text-[#252424] -ml-5">
          and feasible features
        </p>
      </div>
      <div className="mt-28 flex flex-wrap gap-8 justify-center items-center">
        {FEATURES_LIST.map((data) => (
          <FeatureCard key={data?.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Features;
