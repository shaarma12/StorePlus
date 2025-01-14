import React from "react";

const FeatureCard = ({ data }) => {
  const { name, imgSrc } = data;
  return (
    <div className="xl:w-[18.5rem] xl:h-[18.5rem] lg:w-[14rem] lg:h-[14rem] bg-black bg-opacity-[0.08] rounded-2xl flex flex-col justify-center items-center">
      <img src={imgSrc} alt="featureImg" className="mb-6" />
      <div className="text-2xl font-semibold text-[#2f2f2f] text-center px-4">
        <p className="break-words">{name}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
