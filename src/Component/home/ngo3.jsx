import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael & Grace",
      role: "Married Couple",
      message:
        "Our marriage was struggling with communication and trust. Through Look Up Love counseling sessions, we learned how to listen, understand each other, and rebuild our relationship. Today our marriage is stronger than ever."
    },
    {
      name: "Daniel A.",
      role: "Divorce Recovery",
      message:
        "After my divorce I felt lost and emotionally broken. Look Up Love provided guidance and emotional support that helped me rediscover myself and find peace again."
    },
    {
      name: "Sarah O.",
      role: "Single",
      message:
        "The relationship coaching program helped me understand healthy boundaries and self-worth. I now approach relationships with confidence and clarity."
    },
    {
      name: "Hope Foundation",
      role: "Orphanage Partner",
      message:
        "Look Up Love has been a pillar of support for our orphanage, providing mentorship, counseling, and resources that bring hope and stability to children in need."
    },
    {
      name: "Mrs. Adeola",
      role: "Widow",
      message:
        "After losing my husband, I felt alone and broken. Look Up Love gave me emotional strength, community support, and guidance to rebuild my life with dignity."
    },
    {
      name: "David & Esther",
      role: "Engaged Couple",
      message:
        "As we prepare for marriage, Look Up Love has guided us through counseling sessions that helped us build strong communication, emotional maturity, and realistic expectations. We now feel confident stepping into our future together."
    }
  ];

  const [index, setIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds per story
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6a1b1b]/5 via-transparent to-[#6a1b1b]/10 animate-pulse"></div>

        {/* Abstract blurred circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6a1b1b]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6a1b1b]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Stories of Restored Love & Healing
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold text-[#6a1b1b]">Look Up Love</span>, 
            we believe in transforming lives through counseling, emotional wellness, 
            and community support. From marriages to orphanages, from singles to widows, 
            and even engaged couples preparing for marriage, our mission is to heal hearts, 
            restore hope, and build stronger families.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="mt-16 relative h-64 md:h-72 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full max-w-3xl bg-gray-50 p-10 rounded-2xl shadow-lg text-center z-10"
            >
              <FaQuoteLeft className="text-[#6a1b1b] text-3xl mb-6 mx-auto" />
              <p className="text-gray-700 leading-relaxed text-lg italic">
                "{testimonials[index].message}"
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-8 flex justify-center gap-3 z-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-[#6a1b1b]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
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
