import React from "react";
import Tagline from "./ui/Tagline";
import CustomizedAccordions from "./ui/Accordian";
import Illustration1 from "../assets/illustration1.png";

const Faq = () => {
  return (
    <div id="faqs" className="my-[4rem] md:py-[4rem] md:px-[8rem] py-8 px-11">
      <div className="headings text-center space-y-6 md:space-y-8 mb-8">
        <Tagline className={"2xl:text-2xl"} tagline={"Freqently Asked Questions"} />
        <h1 className="text-4xl text-blue-950 font-[700]  md:text-5xl 2xl:text-7xl">FAQS</h1>
        <p className="text-sm text-slate-600 max-w-[50vw] mx-auto 2xl:text-2xl">
        Get instant answers to your most pressing cleaning service questions. We've compiled the most common inquiries to help you understand our professional cleaning process, ensuring you can make informed decisions about your cleaning needs with complete confidence.
        </p>
      </div>
      <section className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="image basis-[40%] 2xl:basis-[40%] md:p-6 ">
          <img
            src={Illustration1}
            alt="cleaning"  
          />
        </div>
        <div className="accordians basis-[60%] 2xl:basis-[50%] md:p-6 flex items-center">
          <CustomizedAccordions/>
        </div>
      </section>
    </div>
  );
};

export default Faq;
