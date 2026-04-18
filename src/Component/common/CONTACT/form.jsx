// ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-xl rounded-3xl grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
      
      {/* Left Side - Contact Info */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-gray-900">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-xl">
          We’re here to answer your questions and help you connect with us.
        </p>
        <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
          <li>📧 <span className="font-semibold">Email:</span> support@yourcompany.com</li>
          <li>📞 <span className="font-semibold">Phone:</span> +234-123-456-7890</li>
          <li>🏢 <span className="font-semibold">Address:</span> 123 Business Street, Lagos, Nigeria</li>
          <li>🕒 <span className="font-semibold">Hours:</span> Mon–Fri, 9 AM – 6 PM (WAT)</li>
        </ul>
      </div>

      {/* CTA PANEL */}
      <div className="rounded-3xl bg-black text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl">

        <div>
          <p className="uppercase tracking-widest text-xs sm:text-[11px] text-gray-400 mb-3">
            Contact
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-5 leading-tight">
            Let’s Build Impact Together
          </h2>

          <p className="text-gray-300 mb-8 text-sm sm:text-base leading-relaxed max-w-lg">
            Whether you want to support, volunteer, or partner with us,
            we’re always open to meaningful collaboration.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">

          <a
            href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Contact Us
          </a>

          <a
            href="mailto:your@email.com"
            className="w-full sm:w-auto text-center border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Email Us
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
