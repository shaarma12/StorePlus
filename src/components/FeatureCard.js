import React from "react";

const FeatureCard = ({ data }) => {
  const { name, imgSrc } = data;
  return (
    <div className="w-[18.5rem] h-[18.5rem] bg-black bg-opacity-[0.08] rounded-2xl flex flex-col justify-center items-center">
      <img src={imgSrc} alt="featureImg" className="mb-6" />
      <div className="text-2xl flex justify-center items-center mx-auto font-semibold text-[#2f2f2f]">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
