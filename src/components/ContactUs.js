import React from "react";

const ContactUs = () => {
  return (
    <div className="xl:w-[93%] lg:w-[115%] flex justify-center items-center xl:mx-auto lg:mx-9 my-28 h-auto bg-[#cee4ff] xl:py-[5.8rem] lg:py-[5rem] rounded-2xl">
      <div className="flex justify-between items-center w-[92%]">
        <div className="w-[28rem] xl:text-5xl lg:text-4xl font-semibold text-[#252424]">
          <p className="mb-4">Contact us for more</p>
          <p>information</p>
        </div>
        <button className="bg-blue-500 px-[1.2rem] py-[0.8rem] text-white text-xl font-semibold rounded-lg">
          Email Us Now
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
