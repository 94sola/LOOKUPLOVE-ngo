import React from "react";

const MapCTASection = () => {
  const address =
    "43 Sijuwola Street, Ago Palace Way, Okota, Lagos";

  const mapSrc =
    "https://www.google.com/maps?q=43+Sijuwola+Street+Ago+Palace+Way+Okota+Lagos&output=embed";

  const directionsLink =
    "https://www.google.com/maps/dir/?api=1&destination=43+Sijuwola+Street+Ago+Palace+Way+Okota+Lagos";

  return (
    <section className="relative w-screen h-[80vh] bg-gray-900 overflow-hidden">
      {/* Fullscreen Map */}
      <iframe
        src={mapSrc}
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        title="NGO Location Map"
      />

      {/* Overlay Panel */}
      <div className="absolute bottom-10 left-10 max-w-md bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl p-8">
        <p className="text-sm text-gray-600">Our Location</p>
        <h3 className="text-xl font-bold text-gray-900 mt-2">{address}</h3>

        <div className="mt-6 flex gap-4 flex-wrap">
          <a
            href={directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#0A74DA] text-white rounded-lg text-sm font-semibold hover:bg-[#095bb0] transition"
          >
            Get Directions
          </a>
          <a
            href="tel:+2348022242916"
            className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapCTASection;
