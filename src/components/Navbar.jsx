import React from "react";
import Logo from "../assets/logo.png"

const Navbar = () => {
  const navItems = [
    {
      id: "1",
      title: "Services",
      link: "services",
    },
    {
      id:"2",
      title: "Pricing",
      link: "pricing",
    },
    {
      id: "3",
      title: "FAQ'S",
      link: "faqs",
    },
  ];
  return (
    <div className="max-h-[4rem] w-full bg-[#2CA2FC] text-white ">
      <div
        className="flex max-w-[80%] px-4 mx-auto py-3 justify-around bg-white text-blue-900 border items-center relative h-[6rem]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px" }}
      >
        <div className="flex justify-center items-center"><img src={Logo} alt="Noble Cleaning Solutions" className="w-[8rem] "/>
        <h1 className="text-xl font-[600] -translate-x-2">Noble Cleaning Solutions</h1>
        </div>
        <div className="justify-between gap-[2rem] 2xl:gap-[3rem] text-lg 2xl:text-2xl font-[500] md:flex hidden relative items-center">
          {/* Border bottom with glowing effect on hover */}
          {navItems.map(({title, link, id}) => (
          <a
            key={id}
            href={`#${link}`}
            className={
              "relative dark:text-neutral-50 items-center flex space-x-1.5 text-blue-900  hover:text-blue-950 group "}
          >
            <span className="text-base !cursor-pointer font-semibold">{title}</span>
            {/* Border bottom with glowing effect on hover */}
            <span
              className={"absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" }
            />
          </a>
        ))}
        </div>
        <a href="#get-a-quote">
          <button className="md:block hidden btn2 green px-4 py-3 bg-white rounded-3xl text-[#2CA2FC] border">
            Request Quote
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
