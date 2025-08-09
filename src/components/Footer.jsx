import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white py-8 mx-auto w-full justify-cent">
      <div className="flex gap-9 justify-center p-8 flex-col md:flex-row">
        <div className="part1 md:w-[35%] px-4">
          <h1 className="text-2xl font-semibold">Nobles Cleaning Solutions</h1>
          <div className="my-2 h-px w-full bg-blue-800" />
          <p>
          We are dedicated to providing exceptional House cleaning and maintenance services.
          </p>
        </div>
        <div className="part2 flex gap-14 md:w-[40%] 2xl:w-[30%] px-4">
          <div className="quickLinks space-y-4">
            <h3 className="text-2xl">Quick Links</h3>
            <ul className="flex flex-col gap-1">
              <li className="font-semibold"><a href="/">Nobles Cleaning Solutions</a></li>
              <li><a href="#achievements">Our Achievements</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#get-a-quote">Book an Appointment</a></li>
              <li><a href="#faqs">FAQ's</a></li>
            </ul>
          </div>
          <div className="OurServices space-y-4 ">
            <h3 className="text-2xl">Our Services</h3>
            <ul className="flex flex-col gap-1">
              <li>Deep Cleaning</li>
              <li>Regular Cleaning</li>
              <li>Move in/out Cleaning</li>
              <li>Airbnb Cleaning</li>
              <li>& more</li>
            </ul>
          </div>
        </div>
        <div className="part3 md:w-[25%] px-4 space-y-4">
          <h2 className="text-2xl">Subscribe Now</h2>
          <p>Subscribe us & receive our latest news & articles.</p>
          <div className="subscribe flex gap-2 flex-col">
          <input type="text" className="p-3 text-slate-950 " />
          <button className="btn1 p-3 rounded-sm !border-none">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="px-8">
        <div className="h-px bg-blue-800 " />
      </div>
      <div className="copyright px-8 py-5">
        &copy; Copyright 2024 Nobles Cleaning Solutions. All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
