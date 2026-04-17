// ContactPage.jsx
import React from "react";
import ContactSection from "./form";
import MapCTASection from "./map";
import FAQSection from "./faq";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <ContactSection />
      <MapCTASection />
      <FAQSection />
    </div>
  );
};

export default ContactPage;
