import React from "react";
import ContactForm from "./ContactUs";

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left Side */}
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="font-bold mb-4">
            We are dedicated to providing the best service for our clients.
          </p>
          <p className="mb-6">
          

At MedPortal, we're dedicated to revolutionizing healthcare by providing a user-friendly platform that bridges the gap between patients and providers.
 Our mission is to enhance healthcare accessibility, 
streamline management processes, and empower individuals to take control of their
 health through innovative, technology-driven solutions.
          </p>
          <button className="bg-sky-300 text-white px-6 py-2 rounded">
            Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
