import React, { useState } from "react";
import { FAQ_IMG, LOGO_IMG } from "../constant";

const QueryPage = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    businessName: "",
    businessAddress: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.businessName.trim())
      validationErrors.businessName = "Business Name is required";
    if (!formData.businessAddress.trim())
      validationErrors.businessAddress = "Business Address is required";
    if (!formData.email.trim()) validationErrors.email = "Email ID is required";
    if (!formData.phoneNumber.trim())
      validationErrors.phoneNumber = "Phone Number is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };

  return (
    <div>
      <div className="w-[84%] h-[7rem] flex justify-between items-center mx-auto">
        <div className="flex w-[14.5rem] justify-between">
          <img className="h-9 mt-1" src={LOGO_IMG} alt="logo" />
          <p className="font-times text-4xl font-semibold text-blue-500">
            StorePlus
          </p>
        </div>
      </div>
      <div className="w-[93%] flex xl:gap-[8.5rem] lg:gap-[5rem] items-center mx-auto mb-36">
        <img
          src={FAQ_IMG}
          alt="faqImage"
          className="xl:w-[38.5rem] lg:w-[28rem] h-[54rem]"
        />
        <div className="mt-3">
          <p className="xl:text-6xl lg:text-5xl font-semibold xl:pb-9 lg:pb-6">
            Have a Query?
          </p>
          <p className="text-xl font-semibold text-[#868585]">
            Fill out your details and we will contact you
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col">
            <p className="text-[#252424] text-xl">Name</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-[#f0f0f0] xl:py-3 lg:py-4 xl:w-[38.8rem] lg:w-[25rem] px-3 border-none outline-none text-lg text-[#252424] mt-3 mb-8 rounded-lg"
            />
            <p className="text-[#252424] text-xl">Business Name</p>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="bg-[#f0f0f0] xl:py-3 lg:py-4 xl:w-[38.8rem] lg:w-[25rem] px-3 border-none outline-none text-lg text-[#252424] mt-3 mb-8 rounded-lg"
            />
            {errors.businessName && (
              <p className="text-red-700 text-xs ml-3 -mt-6 mb-3">
                {errors.businessName}
              </p>
            )}
            <p className="text-[#252424] text-xl">Business Address</p>
            <input
              type="text"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleInputChange}
              className="bg-[#f0f0f0] xl:py-3 lg:py-4 xl:w-[38.8rem] lg:w-[25rem] px-3 border-none outline-none text-lg text-[#252424] mt-3 mb-8 rounded-lg"
            />
            {errors.businessAddress && (
              <p className="text-red-700 text-xs ml-3 -mt-6 mb-3">
                {errors.businessAddress}
              </p>
            )}
            <p className="text-[#252424] text-xl">Email Id</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-[#f0f0f0] xl:py-3 lg:py-4 xl:w-[38.8rem] lg:w-[25rem] px-3 border-none outline-none text-lg text-[#252424] mt-3 mb-8 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-700 text-xs ml-3 -mt-6 mb-3">
                {errors.email}
              </p>
            )}
            <p className="text-[#252424] text-xl">Phone Number</p>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="bg-[#f0f0f0] xl:py-3 lg:py-4 xl:w-[38.8rem] lg:w-[25rem] px-3 border-none outline-none text-lg text-[#252424] mt-3 mb-8 rounded-lg"
            />
            {errors.phoneNumber && (
              <p className="text-red-700 text-xs ml-3 -mt-6">
                {errors.phoneNumber}
              </p>
            )}

            <button
              type="submit"
              className="bg-blue-500 xl:py-3 lg:py-3 xl:w-[38.8rem] lg:w-[25rem] text-white text-xl font-semibold rounded-lg mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryPage;
