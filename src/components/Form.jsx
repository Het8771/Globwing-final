import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden mb-10 p-8 gap-8 container mx-auto">
      {/* Contact Form Section */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-xl font-semibold text-[#3270DF] mb-4">Have Questions?</h2>
        <h1 className="text-3xl font-bold text-[#3270DF] mb-6">We're Here to Help!</h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded focus:ring focus:ring-blue-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded focus:ring focus:ring-blue-200"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 border rounded focus:ring focus:ring-blue-200"
          />

          <select className="w-full p-3 border rounded focus:ring focus:ring-blue-200">
            <option>Choose Subject</option>
            <option>General Inquiry</option>
            <option>Support</option>
            <option>Sales</option>
          </select>

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border rounded focus:ring focus:ring-blue-200"
          ></textarea>

          <div className="flex items-center">
            <input type="checkbox" id="robot" className="mr-2" />
            <label htmlFor="robot" className="text-sm">I AM Not a Robot</label>
          </div>

          <button className="w-full bg-[#3270DF] text-white p-3 rounded focus:outline-none">
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="md:w-1/2 w-full">
        <div className="w-full h-64 md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.821663228372!2d72.8775692758764!3d21.238919280526044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f705dffe915%3A0x1fc83e2ebcf890f5!2sTulsi%20Arcade!5e0!3m2!1sen!2sin!4v1748606234142!5m2!1sen!2sin"
            className="w-full h-full rounded"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
