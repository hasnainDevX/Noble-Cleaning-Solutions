import React, { useState, useEffect } from "react";
import {
  ClockIcon,
  UsersIcon,
  DollarSignIcon,
  ShieldCheck,
} from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "Flexible Scheduling",
    description: "Book your cleaning service at your convenience - same day availability",
    icon: ClockIcon,
    bgColor: "",
  },
  {
    id: 2,
    title: "Professional Staff",
    description:
      "Our experienced cleaners are dedicated to providing exceptional service ",
    icon: UsersIcon,
    bgColor: "bg-blue-400",
  },
  {
    id: 3,
    title: "Competitive Pricing",
    description: "High-quality and professional cleaning services at affordable rates",
    icon: DollarSignIcon,
    bgColor: "bg-blue-500",
  },
  {
    id: 4,
    title: "Satisfaction Guarantee",
    description:
      "Your satisfaction is our top priority. We’ll re-clean if you’re not happy.",
    icon: ShieldCheck,
    bgColor: "bg-blue-700",
  },
];

const Card = () => {
  const [iconSize, setIconSize] = useState(52); // Default icon size for all screens

  useEffect(() => {
    const handleResize = () => {
      // Check if screen width is 1536px (Tailwind's 2xl breakpoint) or larger
      setIconSize(window.innerWidth >= 1536 ? 100 : 52); // Increase to 64 on 2xl screens
    };

    // Set initial size and add resize listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex cards md:flex-wrap gap-6 justify-center items-center mt-11 flex-col md:flex-row w-full">
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`p-7 2xl:pt-12 2xl:space-y-4 btn1 rounded-lg bg-[#2CA2FC] text-center 2xl:w-[48%] lg:w-[40%] min-h-[20vh]`}
        >
          <div className="flex justify-center items-center mb-4">
            <card.icon
              size={iconSize}
              className="text-white bg-blue-300 rounded-full p-3 2xl:p-5"
            />{" "}
            {/* Apply dynamic icon size */}
          </div>
          <h3 className="text-white font-bold text-lg 2xl:text-3xl mb-2">
            {card.title}
          </h3>
          <p className="text-white font-normal text-sm 2xl:text-lg" style={{ textTransform: "none" }}>
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
