import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.svg"; // Logo image
import Product from "../image/Product.svg";
import Agri from "../image/Agri.jpg";
import map from "../image/map.svg";
import {
  FaQuoteLeft,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaPaperPlane,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Form from "../components/Form";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Section */}
      <nav
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Product})` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Globwing logo" className="h-13 w-auto" />
            </Link>

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
              className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Contact us
            </Link>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
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
              <Link to="/About" className="block hover:text-blue-600">
                About us
              </Link>
              <Link to="/Product" className="block hover:text-blue-600">
                Product
              </Link>
              <Link to="/Export" className="block hover:text-blue-600">
                Export
              </Link>
              <Link to="/Download" className="block hover:text-blue-600">
                Download
              </Link>
              <Link
                to="/Contact"
                className="w-full block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 text-center"
              >
                Contact us
              </Link>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <div className="py-20 md:py-40 lg:py-60 px-6 md:px-10">
          <h1
            className="text-white text-5xl md:text-7xl font-bold mt-6"
            style={{ fontFamily: "Frank Ruhl Libre" }}
          >
            About Us
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4">
            Driving global growth with premium products for Agriculture and livestock.
          </p>
        </div>
      </nav>

      {/* About Us Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="w-4/6 mx-auto">
            <img src={Agri} alt="Agriculture Products" className="shadow-lg rounded-lg" />
          </div>

          {/* Text Content Section */}
          <div className="text-gray-700">
            <h4 className="text-[#3270DF] font-semibold text-2xl mb-2">About Us</h4>
            <h3 className="text-[#3270DF] font-bold text-4xl">Agriculture Solutions</h3>
            <p className="mt-4 text-lg text-black">
              At Globwing, we are dedicated to transforming the agricultural landscape with
              innovative, sustainable, and smart farming solutions. From precision agriculture tools
              to eco-friendly farming practices, we empower farmers with the resources they need to
              improve productivity, reduce costs, and cultivate a greener future.
            </p>
            <p className="mt-4 font-semibold text-lg">🌱 Our Vision</p>
            <p className="text-black">
              To be a global leader in sustainable agriculture, fostering a future where advanced
              technology and nature work hand in hand to feed the world responsibly.
            </p>
            <p className="mt-4 font-semibold text-lg">🚜 Our Mission</p>
            <p className="text-black">
              To deliver cutting-edge agricultural solutions that enhance crop yield and soil health.<br />
              To support farmers with tools and knowledge that promote eco-conscious farming.<br />
              To build a resilient and sustainable agriculture ecosystem through innovation,
              education, and collaboration.
            </p>
          </div>
        </div>
      </section>

       <Form/>

      {/* Footer Newsletter Section */}
      <div className="bg-[#3270DF] text-white p-6 flex flex-col md:flex-row justify-between items-center w-full mb-3">
        <h2 className="text-lg font-semibold mb-4 md:mb-0">Connect with Us for Business Solutions</h2>
        <div className="flex items-center bg-white p-2 w-full md:w-auto rounded-lg">
          <input
            type="email"
            placeholder="Enter Mail"
            className="px-4 py-2 outline-none text-black w-full"
          />
          <button className="bg-[#3270DF] text-white p-2 rounded-lg">
            <FaPaperPlane size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
