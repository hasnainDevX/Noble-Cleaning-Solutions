import React from "react";
import Card from "./ui/Card";

const About = () => {
  return (
    <section className="flex font-[700] text-blue-950 flex-col items-center lg:flex-col w-full mt-[4rem] md:py-[4rem] md:px-[8rem] py-8 px-11 text-center ">
      <h1 className="md:text-5xl text-4xl mt-6 2xl:text-7xl">Why Choose Us</h1>
        <Card />
    </section>
  );
};

export default About;
