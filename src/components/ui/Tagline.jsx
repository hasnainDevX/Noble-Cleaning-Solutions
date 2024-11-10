import React from "react";

const Tagline = ({ tagline, className }) => {
  return (
    <span className={`text-center tagline p-2 max-w-[12rem] bg-[#f6fcff] border text-[#2CA2FC] rounded-2xl ${className}`}>
      {tagline}
    </span>
  );
};

export default Tagline;

