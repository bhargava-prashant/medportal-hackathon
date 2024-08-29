import React from "react";
import Main from "../../assets/images/6a18ddbe-5edf-49ec-b19a-57f70ab60feb.jpg";
import Bubble from "../../assets/images/bg.png";

const MainHome = () => {
  return (
    <div className="container mx-auto px-10 py-8 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-black eading-tight">
          Empowering Health Care Management to Scale New Heights in{" "}
          <span className="text-sky-400">Healthcare.</span>
        </h1>
        <p className="mt-4 text-gray-700">
        Welcome to MedPortal, your comprehensive solution for modern healthcare management.
         Our platform is designed to streamline the healthcare experience for patients and providers alike,
          offering a seamless integration of technology and healthcare services.
        </p>
        <button className="mt-6 bg-sky-300 text-white py-2 px-6 rounded hover:bg-sky-500">
          Get Started
        </button>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 relative">
        {/* Main Image */}
        <img
          src={Main}
          alt="Main Image"
          className="w-full h-auto relative z-20"
        />
        {/* Bubble Image */}
        <img
          src={Bubble}
          alt="Bubble"
          className="absolute top-[-100px] md:top-[-100px] left-[-80px] md:left-[-100px] w-3/4 h-auto transform rotate-15 z-10"
        />
      </div>
    </div>
  );
};

export default MainHome;
