import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaHandsHelping, FaGlobe, FaUsers, FaHeart } from "react-icons/fa";

// ✅ Import gallery images from your assets
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";

export default function MissionSection() {
  const highlights = [
    {
      icon: <FaUsers size={28} />,
      title: "Building Stronger Families",
      message:
        "We empower couples, singles, widows, and communities with counseling and mentorship that restores love and trust."
    },
    {
      icon: <FaGlobe size={28} />,
      title: "Global Impact",
      message:
        "From Nigeria to the world, Look Up Love is spreading healing and hope across continents."
    },
    {
      icon: <FaHandsHelping size={28} />,
      title: "Compassion in Action",
      message:
        "We support orphanages, widows, and vulnerable groups with care, guidance, and resources for a brighter future."
    },
    {
      icon: <FaHeart size={28} />,
      title: "Healing Hearts",
      message:
        "Our mission is to restore broken relationships, nurture emotional wellness, and elevate love into extraordinary bonds."
    }
  ];

  const [scrollY, setScrollY] = useState(0);

  // Track scroll for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white text-gray-900 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6a1b1b]/10 via-transparent to-[#6a1b1b]/20 animate-pulse"></div>
        <div
          className="absolute top-24 sm:top-32 left-4 sm:left-10 w-52 sm:w-72 h-52 sm:h-72 bg-[#6a1b1b]/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#6a1b1b]/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT SIDE IMAGE GALLERY with Parallax */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <img
            src={gallery1}
            alt="Gallery 1"
            className="rounded-2xl shadow-xl object-cover h-48 sm:h-64 w-full hover:scale-105 transition-transform duration-500"
          />
          <img
            src={gallery2}
            alt="Gallery 2"
            className="rounded-2xl shadow-xl object-cover h-48 sm:h-64 w-full hover:scale-105 transition-transform duration-500"
          />
          <img
            src={gallery3}
            alt="Gallery 3"
            className="rounded-2xl shadow-xl object-cover h-64 sm:h-80 w-full sm:col-span-2 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Join Our Mission
            </h2>
            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
              At <span className="text-[#6a1b1b] font-semibold">Look Up Love</span>, 
              we believe love is more than emotion — it’s a movement. Together, we can heal hearts, 
              restore families, and empower communities across the world.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#6a1b1b] text-white shadow-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                    {item.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="/donate"
              className="inline-block bg-[#6a1b1b] hover:bg-[#571515] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold shadow-xl transition transform hover:scale-105"
            >
              Join Our Mission
            </a>
          </div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 text-gray-100"
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
