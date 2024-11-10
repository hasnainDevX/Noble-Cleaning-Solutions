import { BookmarkCheck, Logs, Star, Trophy } from "lucide-react";
import React from "react";
import bedimage from "../assets/bed.jpeg";
import Tagline from "./ui/Tagline";

const Achievements = () => {
  return (
    <div id="achievements" className="py-20 relative md:mt-[4rem] flex items-center justify-center bg-center bg-cover ">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bedimage})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Blue Tint Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-white text-center">
        {/* <FileBadge /> */}
        <Tagline className={"!bg-blue-100 font-bold mb-8"} tagline="Our Achievements" />
        <h1 className="mt-4 text-4xl md:text-5xl 2xl:text-6xl text-blue-50 font-bold">
          Premium Cleaning Solutions <br /> 100% Spotless Results
        </h1>
        <div className="mt-[4rem] flex justify-center items-center gap-24 flex-wrap">
          <div className="achievement1 flex justify-center items-center flex-col gap-3">
            <div className="icon bg-cyan-600 rounded-full w-[4rem] h-[4rem] flex justify-center items-center mb-[1rem]">
              <BookmarkCheck className="text-white " />
            </div>
            <div className="value text-5xl 2xl:text-7xl font-semibold">1400+</div>
            <h3 className="text-xl 2xl:text-3xl font-semibold">Service Provide</h3>
          </div>
          <div className="achievement2 flex justify-center items-center flex-col gap-3">
            <div className="icon bg-cyan-600 rounded-full w-[4rem] h-[4rem] flex justify-center items-center mb-[1rem]">
              <Logs className="text-white" />
            </div>
            <div className="value text-5xl 2xl:text-7xl font-semibold">1500+</div>
            <h3 className="text-xl 2xl:text-3xl font-semibold">Total Appointments</h3>
          </div>
          <div className="achievement3 flex justify-center items-center flex-col gap-3">
            <div className="icon bg-cyan-600 rounded-full w-[4rem] h-[4rem] flex justify-center items-center mb-[1rem]">
              <Trophy className="text-white" />
            </div>
            <div className="value text-5xl 2xl:text-7xl font-semibold">4+</div>
            <h3 className="text-xl 2xl:text-3xl font-semibold">Years of Experience</h3>
          </div>
          <div className="achievement4 flex justify-center items-center flex-col gap-3">
            <div className="icon bg-cyan-600 rounded-full w-[4rem] h-[4rem] flex justify-center items-center mb-[1rem]">
              <Star className="text-white" />
            </div>
            <div className="value text-5xl 2xl:text-7xl font-semibold">85%</div>
            <h3 className="text-xl 2xl:text-3xl font-semibold">Happy Customers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
