import React from "react";
import House from "../assets/FullHouse.jpg";

import { FaCheckCircle } from "react-icons/fa";

const CoverServices = () => {
  return (
    <div className="mt-[4rem] py-8 px-11 md:py-[4rem] md:px-[8rem] overflow-hidden mb-[4rem] !mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 2xl:gap-20 flex-wrap justify-center items-center w-full">
        {/* Left Side Image */}
        <div className="flex-[52%] 2xl:flex-[40%] !self-start">
          <img src={House} alt="House illustration" className="!w-[90%] 2xl:!w-[80%] lg:-translate-y-8" />
        </div>
        
        {/* Right Side Content */}
        <div className="flex-[41%] 2xl:flex-[50%] space-y-6 2xl:space-y-11 ">
          <h2 className="text-4xl  md:text-5xl 2xl:text-7xl text-blue-950 font-bold">
            We cover all areas of your Home or Office
          </h2>
          <p className="text-base 2xl:text-2xl text-slate-600">
          Experience comprehensive cleaning excellence that leaves no corner untouched. Our professional team delivers meticulous service across every space, from bustling living rooms to private offices, ensuring a consistently pristine environment that exceeds your expectations.          </p>

          {/* Service List */}
          <div className="flex flex-wrap md:flex-nowrap md:gap-8 2xl:gap-16 gap-4  ">
            {/* Left List */}
            <ul className="space-y-4 2xl:space-y-7 text-lg 2xl:text-3xl text-blue-950">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" /> Bathrooms
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" /> Windows
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" /> Carpets
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" /> Mopping & Vacuuming
              </li>
            </ul>
            {/* Right List */}
            <ul className="space-y-4 2xl:space-y-7 text-lg 2xl:text-3xl text-blue-950 ">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" /> Sills and Doors
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" /> Inside of Microwaves
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" /> Spot Cleaning
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" /> & More
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoverServices;
