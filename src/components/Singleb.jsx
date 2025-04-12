import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.svg"; // Logo image
import backh from "../image/backh.svg";
import about from "../image/about.svg";
import map from "../image/map.svg";
import { FaQuoteLeft, FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar Section */}
      <nav
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${backh})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Globwing logo" className="h-13 w-auto" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-semibold">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
              <Link to="/About" className="hover:text-blue-400">
                About us
              </Link>
              <Link to="/Product" className="hover:text-blue-400">
                Product
              </Link>
              <Link to="/Export" className="hover:text-blue-400">
                Export
              </Link>
              <Link to="/Download" className="hover:text-blue-400">
              Download
              </Link>
            </div>

            {/* Contact Button */}
            <Link
              to="/Contact"
              className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Contact us
            </Link>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {isMenuOpen ? (
                    // Close Icon
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    // Hamburger Icon
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 font-semibold text-gray-800">
              <Link to="/" className="block hover:text-blue-600">
                Home
              </Link>
              <Link to="/about" className="block hover:text-blue-600">
                About us
              </Link>
              <Link to="/product" className="block hover:text-blue-600">
                Product
              </Link>
              <Link to="/Export" className="block hover:text-blue-600">
                Export
              </Link>
              <Link to="/Download" className="block hover:text-blue-600">
              Download
              </Link>
              <Link
                to="/contact"
                className="w-full block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 text-center"
              >
                Contact us
              </Link>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <div className="py-70 px-6 md:px-12">
          <h1 className="text-white text-5xl md:text-7xl font-bold mt-6" style={{ fontFamily: 'Frank Ruhl Libre' }}>Product</h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl">Glowing Group of Company is a leading exporter of agricultural products and textile yarns.</p>
        </div>
         </nav>
           {/* About Us Section */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image Section */}
                      <div className="w-4/6 mx-auto">
                        <img src={about} alt="Agriculture Products" className="rounded-full shadow-lg" />
                      </div>
          
                    {/* Text Content Section */}
                    <div className="text-gray-700">
                      <h4 className="text-[#3270DF] font-semibold text-2xl">About Us</h4>
                      <h3 className="text-[#3270DF] font-bold text-4xl sm:text-4xl">Leading Exporter of Agriculture & Textiles</h3>
                      <p className="mt-4 text-1xl text-black text-justify">
                        Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns. Established in 2020, we have quickly gained recognition for our commitment to quality, reliability, and customer satisfaction.
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start space-x-3">
                          <FaCheckCircle className="text-[#3270DF] mt-1" size={20} />
                          <span className="text-sm font-medium text-justify">Agriculture (Java peanuts, TJ peanuts, Bold peanuts, Hulled Sesame seeds, Natural Sesame seeds, Groundnut Oil, Raw Cotton).</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <FaCheckCircle className="text-[#3270DF] mt-1" size={20} />
                          <span className="text-sm font-medium text-justify">Cattle feed (Soymeal, Peanut cake, Cotton seed cake, Green millet, Yellow maize, Rapeseed meal, Castor seed meal).</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <FaCheckCircle className="text-[#3270DF] mt-1" size={30} />
                          <span className="text-sm font-medium text-justify">Ceramic Parts & Insulators (Band Heater, End Sealing Bead, Ignition Electrode, Ceramic Alumina, Mechanical Seal Ring, Terminal Block for Thermocouple, Thermostat Parts, Ceramic Connector).</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
               {/* Contact Form & Map Section */}
                    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden p-8 gap-8 container mx-auto">
                      {/* Form Section */}
                      <div className="md:w-1/2 w-full">
                        <h2 className="text-2xl font-semibold text-[#3270DF] mb-4">Have Questions?</h2>
                        <h1 className="text-3xl font-bold text-[#3270DF] mb-6">We're Here to Help!</h1>
              
                        <form className="space-y-4">
                          {["Your Name", "Your Email", "Phone"].map((placeholder, index) => (
                            <input key={index} type="text" placeholder={placeholder} className="w-full p-3 border rounded focus:ring focus:ring-blue-200" />
                          ))}
              
                          <select className="w-full p-3 border rounded focus:ring focus:ring-blue-200">
                            <option>Choose Subject</option>
                            <option>General Inquiry</option>
                            <option>Support</option>
                            <option>Sales</option>
                          </select>
              
                          <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded focus:ring focus:ring-blue-200"></textarea>
              
                          <div className="flex items-center">
                            <input type="checkbox" id="robot" className="mr-2" />
                            <label htmlFor="robot" className="text-sm">I AM Not a Robot</label>
                          </div>
              
                          <button className="w-full bg-[#3270DF] text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            Send Message
                          </button>
                        </form>
                      </div>
              
                      {/* Map Section */}
                      <div className="md:w-1/2 w-full">
                        <img src={map} alt="Company Location Map" className="w-full h-[300px] md:h-full object-cover rounded-lg" />
                      </div>
                    </div>          
    </div>
  );
};

export default Navbar;

