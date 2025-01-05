import React from "react";

const ContactUs = () => {
  return (
    <div className="w-[93%] flex justify-center items-center mx-auto my-28 h-auto bg-[#cee4ff] py-[5.8rem] rounded-2xl">
      <div className="flex justify-between items-center w-[92%]">
        <div className="w-[28rem] text-5xl font-semibold text-[#252424]">
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
