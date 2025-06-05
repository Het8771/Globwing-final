import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../image/logo.svg"; // Logo image
import backh from "../image/backh.svg";
import map from "../image/map.svg";
import { FaPaperPlane } from "react-icons/fa";
import ProductDetailSection from "./Singleproduct";
import Product from "../image/Product.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Form from "../components/Form";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const productDetail = location.state?.productDetail || {}; // Handle case when productDetail is undefined or null

  return (
    <>
      <div>
        {/* Navbar Section */}
        <nav className="relative bg-cover bg-center text-white" style={{ backgroundImage: `url(${Product})` }}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div>
                <Link to="/">
                  <LazyLoadImage src={logo} alt="Globwing logo" className="h-13 w-auto" />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8 font-semibold ">
                <Link to="/" className="text-white hover:text-blue-600">
                  Home
                </Link>
                <Link to="/About" className="text-white hover:text-blue-600">
                  About us
                </Link>
                <Link to="/Product" className="text-white hover:text-blue-600">
                  Product
                </Link>
                <Link to="/Export" className="text-white hover:text-blue-600">
                  Export
                </Link>
                {/* <a href="/Blog" className="text-black hover:text-blue-600">
                Blog
              </a> */}
              </div>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Contact us
              </Link>

              {/* Hamburger Menu (Mobile) */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 text-gray-800">
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
                {/* <Link to="/Blog" className="block hover:text-blue-600">
                          Blog
                        </Link> */}
                <Link
                  to="/Contact"
                  className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
                >
                  Contact us
                </Link>
              </div>
            )}
          </div>

          {/* Hero Section */}
          <div className="py-60 px-6 md:px-12">
            <h1 className="text-white text-5xl md:text-7xl font-bold mt-6" style={{ fontFamily: 'Frank Ruhl Libre' }}>
              Product
            </h1>
            <p className="text-white text-lg md:text-2xl">
              Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns.
            </p>
            <span className="text-white text-lg md:text-2xl max-w-2xl">
              Established in 2020, we have quickly gained recognition for our commitment to quality.
            </span>
          </div>
        </nav>

        {/* Single Product Detail Section */}
        <ProductDetailSection productDetail={productDetail} />

        {/* Contact Form & Map Section */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden p-8 gap-8 container mx-auto">
          <Form />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#3270DF] text-white p-6 flex flex-col md:flex-row justify-between items-center w-full mb-2">
        <h2 className="text-lg font-semibold">Connect with Us for Business Solutions</h2>
        <div className="flex items-center bg-white p-2 w-full md:w-auto mt-4 md:mt-0 rounded-lg">
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
