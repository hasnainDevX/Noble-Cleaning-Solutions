import { Key, Star } from "lucide-react";
import CondoImg from "../assets/Apartment.png";
import OfficeImg from "../assets/company.png";
import HouseImg from "../assets/house.png";
import AirbnbImg from "../assets/airbnblogo.png"
import Tagline from "./ui/Tagline";


const Services = () => {
  return (
    <div id="services" className="mt-[4rem] font-[700] py-8 px-11 md:py-[4rem] md:px-[8rem] w-full">
      <div className="headings font-[700] text-blue-950 text-center">
        <Tagline tagline={"Our Services"} />
        <h1 className="text-blue-950 md:text-5xl 2xl:text-7xl text-4xl mt-6">
          The Services We Provide for our Customers
        </h1>
      </div>
      
      <div className="services grid grid-cols-1 md:grid-cols-2 gap-8 mt-[2rem] w-full">
        
        {/* House Cleaning */}
        <div className="card border bg-[#f5f8ff0a] rounded-md 2xl:py-6">
          <div className="image px-4 flex justify-center">
            <img src={HouseImg} alt="house" className="p-9 max-w-[300px]"/>
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

        {/* Condo Cleaning */}
        <div className="card border bg-[#f5f8ff0a] rounded-md 2xl:py-6">
          <div className="image px-4 flex justify-center">
            <img src={CondoImg} alt="condo" className="p-9 max-w-[300px]" />
          </div>
          <div className="textpart pb-8 px-4 space-y-1">
            <h3 className="text-2xl 2xl:text-5xl text-blue-950 font-bold text-center">
              Condo Cleaning
            </h3>
            <p className="text-sm 2xl:text-xl text-slate-600 text-center font-[500]">
              Specialized cleaning solutions designed for condo living. Our efficient teams deliver thorough cleaning for your urban space while respecting building protocols and neighbor privacy.
            </p>
          </div>
        </div>

        {/* Office Cleaning */}
        <div className="card border bg-[#f5f8ff0a] rounded-md 2xl:py-6">
          <div className="image px-4 flex justify-center">
            <img src={OfficeImg} alt="house" className="max-w-[300px]" />
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

        {/* Airbnb & Property Management - Priority Service */}
        <div className="card border bg-[#f5f8ff0a] rounded-md 2xl:py-6 relative">
          
          {/* Priority Badge */}
          <div className="absolute -top-3 -right-3 z-10">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
              <Star className="w-3 h-3" />
              PRIORITY SERVICE
            </div>
          </div>
          
          {/* Featured Border */}
          <div className="absolute inset-0  rounded-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          
          <div className="image px-4 relative z-10">
            <div className="p-20 flex justify-center">
                <img src={AirbnbImg} alt="" />
            </div>
          </div>
          
          <div className="textpart pb-8 px-4 space-y-3 relative z-10">
            <div className="text-center">
              <h3 className="text-2xl 2xl:text-4xl text-blue-950 font-bold">
                Airbnb & Property Management
              </h3>
              <div className="flex justify-center gap-2 mt-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Same-Day Turnaround</span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-medium">Bulk Pricing</span>
              </div>
            </div>
            <p className="text-sm 2xl:text-lg text-slate-600 text-center font-[500]">
              Specialized cleaning for Airbnb hosts and property management companies. Quick turnarounds between guests, deep cleaning protocols, linen service, and bulk pricing for multiple properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;