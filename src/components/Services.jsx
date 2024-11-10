import React from "react";
import HouseImg from "../assets/house.png";
import CondoImg from "../assets/apartment.png";
import OfficeImg from "../assets/company.png";
import Tagline from "./ui/Tagline";

const Services = () => {
  return (
    <div id="services" className="mt-[4rem] font-[700] py-8 px-11 md:py-[4rem] md:px-[8rem] w-full">
      <div className="headings font-[700] text-blue-950  text-center">
       <Tagline tagline={"Our Services"}/>
        <h1 className="text-blue-950 md:text-5xl 2xl:text-7xl text-4xl mt-6 ">
          The Services We Provide for our Customers
        </h1>
      </div>
      <div className="services flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-8 justify- mt-[2rem] w-full">
        <div className="card border bg-[#f5f8ff0a] rounded-md flex-[30%] 2xl:py-6">
          <div className="image px-4">
            <img src={HouseImg} alt="house" className="p-9 hover:scale-110 2xl:w-[105%]"/>
          </div>
          <div className="textpart pb-8 px-4 space-y-1">
            <h3 className="text-2xl 2xl:text-5xl text-blue-950 font-bold text-center">
              House Cleaning
            </h3>
            <p className="text-sm 2xl:text-xl text-slate-600 text-center font-[500]">
            Transform your home into a spotless sanctuary with our house cleaning service. We handle every detail, from deep cleaning to daily maintenance, ensuring your space stays clean.
            </p>
          </div>
        </div>
        <div className="card border bg-[#f5f8ff0a] rounded-md  flex-[30%] 2xl:py-6">
          <div className="image px-4">
            <img src={CondoImg} alt="condo" className="p-9 hover:scale-110 2xl:!scale-90" />
          </div>
          <div className="textpart pb-8 px-4 space-y-1">
            <h3 className="text-2xl 2xl:text-5xl text-blue-950 font-bold text-center">
              Condo Cleaning
            </h3>
            <p className="text-sm 2xl:text-xl  text-slate-600 text-center font-[500]">
            Specialized cleaning solutions designed for condo living. Our efficient teams deliver thorough cleaning for your urban space while respecting building protocols and neighbor privacy.
            </p>
          </div>
        </div>
        <div className="card border bg-[#f5f8ff0a] rounded-md flex-[30%] 2xl:py-6">
          <div className="image px-4">
            <img src={OfficeImg} alt="house" className="hover:scale-110" />
          </div>
          <div className="text pb-8 px-4 space-y-1">
            <h3 className="text-2xl 2xl:text-5xl text-blue-950 font-bold text-center">
              Office Cleaning
            </h3>
            <p className="text-sm text-slate-600 text-center font-[500] 2xl:text-xl">
            Create a productive workplace with our professional office cleaning service. We maintain your business environment to the high standards, allowing you and your team to focus on what matters most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
