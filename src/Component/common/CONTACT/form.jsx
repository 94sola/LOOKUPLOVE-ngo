// ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-8 bg-white shadow-xl rounded-lg grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Left Side - Contact Info */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          We’re here to answer your questions and help you connect with us.
        </p>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li>📧 <span className="font-semibold">Email:</span> support@yourcompany.com</li>
          <li>📞 <span className="font-semibold">Phone:</span> +234-123-456-7890</li>
          <li>🏢 <span className="font-semibold">Address:</span> 123 Business Street, Lagos, Nigeria</li>
          <li>🕒 <span className="font-semibold">Hours:</span> Mon–Fri, 9 AM – 6 PM (WAT)</li>
        </ul>
      </div>

      {/* Right Side - Google Form */}
      
      {/* CTA PANEL */}
      <div className="rounded-2xl bg-black text-white p-12 flex flex-col justify-center shadow-xl">

        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">
          Contact
        </p>

        <h2 className="text-3xl font-semibold mb-6 leading-snug">
          Let’s Build Impact Together
        </h2>

        <p className="text-gray-300 mb-8">
          Whether you want to support, volunteer, or partner with us,
          we’re always open to meaningful collaboration.
        </p>

        <div className="flex gap-3 flex-wrap">

          <a
            href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Contact Us
          </a>

          <a
            href="mailto:your@email.com"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Email Us
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
