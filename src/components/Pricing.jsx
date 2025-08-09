import React from "react";
import { X, Star, Zap, Shield, Clock, Sparkles, Award, Diamond, Home } from "lucide-react";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="mt-[4rem] md:py-[4rem] md:px-[8rem] py-8 px-11 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="text-center mb-12">
        <h1 className="mx-auto mb-4 text-4xl md:text-5xl font-bold text-blue-950 text-center 2xl:text-7xl">
          Pricing
        </h1>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-cyan-100 rounded-full border border-green-200">
          <Star className="text-green-600 w-5 h-5" />
          <span className="text-green-700 font-medium">Special 15% discount for local residents</span>
          <Star className="text-green-600 w-5 h-5" />
        </div>
      </div>

      <div className="text-slate-900 flex gap-8 lg:gap-12 w-full lg:justify-center flex-col md:flex-row md:justify-between max-w-7xl mx-auto">
        {/* Standard Plan */}
        <div className="group relative p-8 2xl:py-12 space-y-6 hover:shadow-2xl transition-all duration-300 border border-slate-200 bg-white md:w-[30vw] rounded-2xl shadow-lg">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-slate-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              STANDARD
            </div>
          </div>
          
          <div className="text-center pt-4">
            <Shield className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Standard</h2>
            <p className="text-slate-600 text-xs">Perfect for regular cleaning needs</p>
          </div>

          <div className="price p-6 border-2 rounded-2xl border-cyan-200 text-center bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
            <div className="relative z-10">
              <div className="mb-2">
                <span className="text-2xl font-medium text-red-500 line-through">$40</span>
                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                  SAVE $10
                </span>
              </div>
              <span className="text-5xl font-bold text-blue-900">$30</span>
              <span className="text-lg font-medium text-slate-700 ml-1">/Hour</span>
            </div>
            <span className="text-slate-600 text-[12px]">3 hour minimum appointment</span>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-500" />
              What's included?
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Diamond className="text-cyan-600 w-3 h-3" />
                </div>
                <span className="text-slate-700">Flexible booking & service</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Diamond className="text-cyan-600 w-3 h-3" />
                </div>
                <span className="text-slate-700">Choose your own tasks</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Diamond className="text-cyan-600 w-3 h-3" />
                </div>
                <span className="text-slate-700">No hidden charges</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Diamond className="text-cyan-600 w-3 h-3" />
                </div>
                <span className="text-slate-700">Professional cleaning staff</span>
              </li>
              <li className="flex items-center gap-3 opacity-60">
                <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center">
                  <X className="text-slate-400 w-3 h-3" />
                </div>
                <span className="text-slate-500">Same-day availability</span>
              </li>
              <li className="flex items-center gap-3 opacity-60">
                <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center">
                  <X className="text-slate-400 w-3 h-3" />
                </div>
                <span className="text-slate-500">Products not included</span>
              </li>
            </ul>
          </div>

          <a href="#get-a-quote" className="block">
            <button className="group relative w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span className="flex items-center justify-center gap-2">
                Get Started
                <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </a>
        </div>

        {/* Premium Plan */}
        <div className="group relative p-8 2xl:py-12 space-y-6 hover:shadow-2xl transition-all duration-300  border-2 border-gradient-to-r from-cyan-400 to-blue-500 bg-white md:w-[30vw] rounded-2xl shadow-xl">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              <Award className="w-4 h-4 inline mr-1" />
              PREMIUM
            </div>
          </div>
          
          <div className="text-center pt-4">
            <Zap className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Convenient</h2>
            <p className="text-slate-600 text-sm">Everything included for ultimate convenience</p>
          </div>

          <div className="price p-6 border-2 rounded-2xl border-gradient-to-r from-cyan-300 to-blue-300 text-center bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full -translate-y-12 translate-x-12 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-r from-purple-200 to-cyan-200 rounded-full translate-y-8 -translate-x-8 opacity-40"></div>
            <div className="relative z-10">
              <div className="mb-2">
                <span className="text-2xl font-medium text-red-500 line-through">$45</span>
                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">
                  SAVE $10
                </span>
              </div>
              <span className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">$35</span>
              <span className="text-lg font-medium text-slate-700 ml-1">/Hour</span>
              <div className="mt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <Clock className="w-3 h-3 mr-1" />
                  Best Value
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-500" />
              Everything included!
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Flexible booking & service</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Choose your own tasks</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">No hidden charges</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Professional cleaning staff</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Same-day availability</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Products included</span>
              </li>
            </ul>
          </div>

          <a href="#get-a-quote" className="block">
            <button className="group relative w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span className="flex items-center justify-center gap-2">
                Get Started Now
                <Award className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </a>
        </div>

       {/* Airbnb Turnovers Plan */}
        <div className="group relative p-8 2xl:py-12 space-y-6 hover:shadow-2xl transition-all duration-300  border-2 border-gradient-to-r from-orange-400 to-red-500 bg-white md:w-[30vw] rounded-2xl shadow-xl">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              <Home className="w-4 h-4 inline mr-1" />
              AIRBNB
            </div>
          </div>
          
          <div className="text-center pt-4">
            <Home className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Airbnb Turnovers</h2>
            <p className="text-slate-600 text-sm">Trusted locally in our area</p>
          </div>

          <div className="price p-6 border-2 rounded-2xl border-gradient-to-r from-orange-300 to-red-300 text-center bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-orange-200 to-red-200 rounded-full -translate-y-12 translate-x-12 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full translate-y-8 -translate-x-8 opacity-40"></div>
            <div className="relative z-10">
              <span className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">$35</span>
              <span className="text-lg font-medium text-slate-700 ml-1">/Hour</span>
              <div className="mt-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  <Clock className="w-3 h-3 mr-1" />
                  Regular Cleaning: $30/hr
                </div>
              </div>
            </div>
                <span className="text-[12px] text-slate-600 translate-y-4">2 hours minimum appointment</span>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-500" />
              Complete turnover service!
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Deep cleaning service</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Fresh linen service</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Restocking amenities</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Property inspection report</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Fast turnaround times</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">Bulk pricing discounts</span>
              </li>
            </ul>
          </div>

          <a href="#get-a-quote" className="block">
            <button className="group relative w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span className="flex items-center justify-center gap-2">
                Book Turnover
                <Home className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-600 text-sm max-w-2xl mx-auto">
          All prices are transparent with no hidden fees. Local residents receive a 15% discount at the time of payment as mentioned in packages.
        </p>
      </div>
    </div>
  );
};

export default Pricing;