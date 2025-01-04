import React, { useState } from "react";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <div className="border-t-2 border-[#474646] border-b-2">
          <div
            className="flex justify-between items-center w-[36.5rem] mb-5 hover:bg-black hover:bg-opacity-5 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <p className="text-2xl text-[#474646] tracking-wider mt-2 mb-1">
              Convallis nec riscus luctus ipsum?
            </p>

            <img
              src="https://img.icons8.com/?size=100&id=60653&format=png&color=4D4D4D"
              className="w-5 h-5"
            />
          </div>
          <p className="text-2xl text-[#474646] w-[36rem] ml-3 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.maecenas
            emet sed eu adipiscing fusce dictum turpis
          </p>
        </div>
      ) : (
        <div
          className="flex justify-between items-center w-[36.5rem] mb-5 hover:bg-black hover:bg-opacity-5 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p className="text-2xl text-[#474646] tracking-wider">
            Convallis nec riscus luctus ipsum?
          </p>
          <img
            src="https://img.icons8.com/?size=100&id=5434&format=png&color=4D4D4D"
            className="w-5 h-5"
          />
        </div>
      )}
    </>
  );
};

export default DropDown;
