import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Adjust the imports to match your actual asset paths
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";

export default function GallerySection() {
  const galleryItems = [
    {
      image: gallery1,
      caption: "Couples counseling session bringing hearts together."
    },
    {
      image: gallery2,
      caption: "Community outreach program supporting widows and families."
    },
    {
      image: gallery3,
      caption: "Orphanage visit filled with love and mentorship."
    },
    {
      image: gallery4,
      caption: "Pre-marriage guidance workshop for engaged couples."
    },
    {
      image: gallery5,
      caption: "Relationship coaching session empowering singles."
    }
  ];

  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryItems.length]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manual navigation
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % galleryItems.length);
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-black text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6a1b1b]/20 via-transparent to-[#6a1b1b]/30 animate-pulse"></div>
        <div
          className="absolute top-24 sm:top-28 left-4 sm:left-10 w-52 sm:w-72 h-52 sm:h-72 bg-[#6a1b1b]/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#6a1b1b]/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto px-4 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Premium Gallery
          </h2>
          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            Explore moments of love, healing, and community impact captured through 
            the journey of <span className="bg-[#6a1b1b] text-white px-2 py-1 rounded-md font-semibold">Look Up Love</span>.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="mt-16 sm:mt-20 relative h-auto md:h-[460px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-[#6a1b1b]/40 cursor-pointer"
              onClick={() => setLightboxOpen(!lightboxOpen)}
            >
              <img
                src={galleryItems[index].image}
                alt={galleryItems[index].caption}
                className="w-full h-64 sm:h-[320px] md:h-[350px] object-cover"
              />
              <div className="bg-black/70 text-white p-5 sm:p-6 text-center">
                <p className="text-base sm:text-lg md:text-xl italic">
                  {galleryItems[index].caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#6a1b1b] text-white p-3 sm:p-4 rounded-full transition"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#6a1b1b] text-white p-3 sm:p-4 rounded-full transition"
          >
            <FaChevronRight size={18} />
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex justify-center gap-3">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition ${
                i === index ? "bg-[#6a1b1b]" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer px-4 sm:px-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={galleryItems[index].image}
              alt={galleryItems[index].caption}
              className="w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-3xl shadow-2xl mx-auto"
            />
            <p className="mt-4 text-center text-gray-300 italic text-sm sm:text-base">
              {galleryItems[index].caption}
            </p>
          </div>
        </div>
      )}

      {/* Wave Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 text-gray-900"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,106.7C672,96,768,96,864,117.3C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128V320H0Z"
        ></path>
      </svg>
    </section>
  );
}
