import React from "react";
import Navbar from "./Navbar";
import bubbles from "../assets/bubbles.png";
import cleaningitems from "../assets/cleaningequipments.png";
import Tagline from "./ui/Tagline";
import { FloatingNav } from "./ui/MobileNav";
import headerImg from "../assets/illustration2.png";

const Header = () => {
  return (
    <>
      <Navbar />
      <FloatingNav />
      <main className="xl:h-[80vh] mt-[4rem] flex font-[700] text-blue-950 flex-col lg:flex-row w-full ">
        <div
          className="flex justify-center flex-col textpart flex-1 md:py-[4rem] md:px-[8rem] py-8 px-11 space-y-8 w-full
        "
        >
          <Tagline tagline="Cleaning Services" />
          <h1 className="md:text-6xl 2xl:text-8xl text-5xl mt-6 ">
            {" "}
            Enjoy a Clean & beautiful Home Everyday!{" "}
          </h1>
          <p className="text-base font-normal 2xl:text-2xl text-gray-400">
          A clean home is a happy home. Our professional cleaning team is here to transform your space into a serene sanctuary. From routine cleaning to deep cleans, we’ll meticulously clean every corner of your home
          </p>
          <div className="flex gap-4 md:h-[4rem] flex-col md:flex-row">
            <a href="#get-a-quote">
              <button className="btn1 px-5 py-4 2xl:p-12 2xl:text-2xl flex justify-center items-center rounded-4xl md:px-4 md:py-3 text-white rounded-full bg-[#2CA2FC] !font-[500]">
                Schedule a Service
              </button>
            </a>
            <a href="#pricing">
              <button className="btn2 green 2xl:p-12 2xl:text-2xl flex justify-center items-center px-5 py-4 rounded-4xl md:px-4 md:py-3 bg-white text-[#2CA2FC] border border-[#2CA2FC] !font-[500]">
                Explore Pricing
              </button>
            </a>
          </div>
        </div>
        <div className="imgpart flex-1 flex items-center justify-center b-red-600">
          <img
            src={bubbles}
            alt="bubble"
            className="-z-20 absolute left-0 w-[60%] lg:w-[40%] opacity-35"
          />
          <img
            className="lg:scale-110 w-[100%] rounded-xl  "
            src={headerImg}
            alt="cleanhome"
          />
        </div>
      </main>
    </>
  );
};

export default Header;
