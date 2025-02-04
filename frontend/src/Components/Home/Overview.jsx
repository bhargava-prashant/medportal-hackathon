import React from "react";
import OverviewImage from "../../assets/images/overview.png";

const OverviewSection = () => {
  return (
    <div className="container mx-auto px-8 py-8 flex flex-col-reverse md:flex-row items-center justify-between bg-sky-50">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={OverviewImage}
          alt="Overview"
          className="w-3/4 md:w-2/3 h-auto object-contain"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Overview</h2>
        <p className="mt-4 text-gray-700">
        Our healthcare management system is designed to empower users with a range of innovative tools and features that simplify and enhance the healthcare experience. 
        This project provides a
         comprehensive platform where both patients and healthcare providers can connect, manage, and 
         optimize their healthcare interactions with ease.
        </p>
        <button className="mt-6 bg-sky-300 text-white py-2 px-6 rounded hover:bg-sky-500">
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default OverviewSection;
