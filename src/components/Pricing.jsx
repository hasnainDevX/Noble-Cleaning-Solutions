import React from "react";
import { FaDiamond, FaMinus } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="mt-[4rem] md:py-[4rem] md:px-[8rem] py-8 px-11"
    >
      <h1 className="mx-auto mb-[4rem] text-4xl md:text-5xl font-bold text-blue-950  text-center 2xl:text-7xl">
        Pricing
      </h1>
      <div className="text-slate-900 flex gap-8 lg:gap-20 w-full lg:justify-center flex-col md:flex-row md:justify-between">
        <div className="Pricing1 p-11 2xl:py-16 space-y-6 hover:border-[#2ca2fc85] border border-[#2ca2fc36] bg-white md:w-[30vw] rounded-md">
          <h2 className="text-3xl text-center text-cyan-700">Standard</h2>
          <div className="price p-3 border rounded-2xl border-cyan-600 text-center -[#2ca2fcc4] text-blue-90">
            <span className="text-4xl font-bold text-blue-90">$35</span>
            <span className="text-lg font-[400] text-slate-90 ml-1">/Hour</span>
          </div>
          <h4>What is included?</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <FaDiamond className="text-cyan-500" />
              Flexible booking & service
            </li>
            <li className="flex items-center gap-3">
              <FaDiamond className="text-cyan-500" />
              Choose your own tasks
            </li>
            <li className="flex items-center gap-3">
              <FaDiamond className="text-cyan-500" /> No hidden charges
            </li>
            <li className="flex items-center gap-3">
              <FaDiamond className="text-cyan-500" /> Professional cleaning
              staff
            </li>
            <li className="flex items-center gap-3">
              <FaMinus className="text-cyan-500" /> Same-day availability
            </li>
            <li className="flex items-center gap-3">
              <FaMinus className="text-cyan-500" /> Products Not Included
            </li>
          </ul>
          <a href="#get-a-quote">
            <button className="btn1 rounded-sm flex gap-2 justify-center items-center btn1 px-4 py-3 w-full bg-[#2CA2FC] !outline-none !border-none mt-4">
              Continue
            </button>
          </a>
        </div>
        <div className="Pricing2 p-11 2xl:py-16 space-y-6 hover:border-[#2ca2fc85] border border-[#2ca2fc2a] bg-white md:w-[30vw] rounded-md">
          <h2 className="text-3xl text-center text-cyan-700">Convenient</h2>
          <div className="price p-3 border rounded-2xl border-cyan-600 text-center -[#2ca2fcc4] text-blue-90">
            <span className="text-4xl font-bold text-blue-90">$40</span>
            <span className="text-lg font-[400] text-slate-90 ml-1">/Hour</span>
          </div>
          <h4>What is included?</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <FaDiamond  className="text-cyan-500" />
              Flexible booking & service
            </li>
            <li className="flex items-center gap-3">
              <FaDiamond  className="text-cyan-500" />
              Choose your own tasks
            </li>
            <li className="flex items-center gap-3">
              <FaDiamond className="text-cyan-500" /> No hidden charges
            </li>
            <li className="flex items-center gap-3">
              <FaDiamond className="text-cyan-500" /> Professional cleaning
              staff
            </li>
            <li className="flex items-center gap-3">
              <FaDiamond className="text-cyan-500" /> Same-day availability
            </li>
            <li className="flex items-center gap-3">
              <FaDiamond className="text-cyan-500" /> Products Included
            </li>
          </ul>
          <a href="#get-a-quote">
            <button className="btn1 rounded-sm flex gap-2 justify-center items-center btn1 px-4 py-3 w-full bg-[#2CA2FC] !outline-none !border-none mt-4">
              Continue
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
