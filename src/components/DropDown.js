import React, { useState } from "react";

const DropDown = ({ dropDownInfo }) => {
  const { name, info } = dropDownInfo;
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`${
          open
            ? "block border-t-[1px] border-[#474646] border-b-[1px] w-[36.5rem]"
            : "hidden"
        }`}
      ></div>
      <div
        className="flex justify-between items-center w-[36.5rem] mb-5 hover:bg-black hover:bg-opacity-5 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <p className="text-2xl text-[#474646] tracking-wider mt-2 mb-1">
          {name}
        </p>

        {open ? (
          <img
            src="https://img.icons8.com/?size=100&id=60653&format=png&color=4D4D4D"
            alt="DropDown"
            className="w-5 h-5"
          />
        ) : (
          <img
            src="https://img.icons8.com/?size=100&id=2760&format=png&color=4D4D4D"
            alt="DropDown"
            className="w-5 h-5"
          />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p
          className={`${
            open
              ? "block text-2xl text-[#474646] w-[36rem] ml-3 mb-4"
              : "hidden"
          }`}
        >
          {info}
        </p>
      </div>
      <div
        className={`${
          open
            ? "block border-t-[1px] border-[#474646] border-b-[1px] w-[36.5rem]"
            : "hidden"
        }`}
      ></div>
    </>
  );
};

export default DropDown;
