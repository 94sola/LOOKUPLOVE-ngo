import React from "react";

const MapCTASection = () => {
  const address =
    "43 Sijuwola Street, Ago Palace Way, Okota, Lagos";

  const mapSrc =
    "https://www.google.com/maps?q=43+Sijuwola+Street+Ago+Palace+Way+Okota+Lagos&output=embed";

  const directionsLink =
    "https://www.google.com/maps/dir/?api=1&destination=43+Sijuwola+Street+Ago+Palace+Way+Okota+Lagos";

  return (
    <section className="relative w-screen h-[70vh] sm:h-[75vh] md:h-[80vh] bg-gray-900 overflow-hidden">
      {/* Fullscreen Map */}
      <iframe
        src={mapSrc}
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        title="NGO Location Map"
      />

      {/* Overlay Panel */}
      <div className="absolute left-1/2 top-auto bottom-6 -translate-x-1/2 sm:left-10 sm:translate-x-0 sm:bottom-10 max-w-md w-[calc(100%-2rem)] sm:w-auto bg-white/95 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl p-6 sm:p-8">
        <p className="text-sm sm:text-base text-gray-600">Our Location</p>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-2 leading-snug">{address}</h3>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href={directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-5 py-3 bg-[#0A74DA] text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-[#095bb0] transition"
          >
            Get Directions
          </a>
          <a
            href="tel:+2348022242916"
            className="w-full sm:w-auto text-center px-5 py-3 border border-gray-300 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapCTASection;
