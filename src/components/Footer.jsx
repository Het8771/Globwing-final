import { useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import logof from "../image/logof.png";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { BiMessageRoundedDots } from "react-icons/bi";

const Footer = () => {
  const [showIcons, setShowIcons] = useState(false);
  

  return (
    <footer className="bg-[#3270DF] text-white py-10 px-5 md:px-20 relative">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo and Description */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="flex items-center">
            <Link to="/">
              <img src={logof} alt="Logo" className="h-12 mr-3" />
            </Link>
          </div>
          <p className="mt-3 text-sm md:text-base">
            Empowering agriculture with innovative solutions — Globwing, growing with you.
          </p>
          {/* Social Media Links */}
          <div className="flex space-x-3 mt-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-xl cursor-pointer hover:text-gray-300" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-xl cursor-pointer hover:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-300" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-xl cursor-pointer hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap md:flex-nowrap md:space-x-16 w-full md:w-auto">
          {/* Company Section */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-2 space-y-2 text-sm md:text-base">
              <li><Link to="/About"onClick={()=> window.scrollTo ({top:0,behavior:'smooth'})}>About Us</Link></li>
              <li><Link to="/"onClick={()=> window.scrollTo ({top:0,behavior:'smooth'})}>Collection</Link></li>
              <li><Link to="/Export"onClick={()=> window.scrollTo ({top:0,behavior:'smooth'})}>Exports</Link></li>
              <li><Link to="/Contact"onClick={()=> window.scrollTo ({top:0,behavior:'smooth'})}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Industry Section */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="font-semibold text-lg">Industry</h3>
            <ul className="mt-2 space-y-2 text-sm md:text-base">
              <li><Link to="/Product"onClick={()=> window.scrollTo ({top:0,behavior:'smooth'})}>Agriculture</Link></li>
              <li><Link to="/Product"onClick={()=> window.scrollTo ({top:0,behavior:'smooth'})}>Cattle Feed</Link></li>
              <li><Link to="/Product"onClick={()=> window.scrollTo ({top:0,behavior:'smooth'})}>Ceramic Parts & Insulator</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="mt-2 space-y-2 text-sm md:text-base">
              <li>Sourcing & Processing</li>
              <li>Recycling & Sustainability</li>
              <li>Supply Chain & Logistics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-sm md:text-base">
        &copy; 2025 All rights reserved by Globwing International
      </div>

      {/* Floating Icons */}
      <div className="fixed right-5 bottom-5 flex flex-col items-center space-y-3 z-[100]">
        {showIcons && (
          <>
            {/* Email Icon */}
            <a href="mailto:example@example.com" aria-label="Email">
              <HiMail className="bg-white p-2 rounded-full text-blue-500 text-5xl cursor-pointer hover:bg-gray-100 transition-all duration-300" />
            </a>

            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/8511727716"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <IoLogoWhatsapp className="bg-white p-2 rounded-full text-blue-500 text-5xl cursor-pointer hover:bg-gray-100 transition-all duration-300" />
            </a>
          </>
        )}
        {/* Toggle Button */}
        <button
          className="bg-blue-500 p-3 rounded-full text-white text-3xl shadow-lg hover:bg-blue-600 transition-all duration-300"
          onClick={() => setShowIcons(!showIcons)}
        >
          {showIcons ? <RxCross2 /> : <BiMessageRoundedDots />}
        </button>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            padding: 20px;
          }
          .flex-wrap {
            flex-direction: column;
            align-items: center;
          }
          .w-full {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
