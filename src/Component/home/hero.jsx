import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import heroImage from "../../assets/images/herosection.jpg";

export default function Hero() {
  const messages = [
    "Supporting Healthy Relationships",
    "Healing Hearts & Restoring Love",
    "Guiding Couples Toward Peace",
    "Empowering Singles Emotionally",
    "LookUpLove Supports Orphanage Homes ❤️",
    "Healing and Support for Widows & Widowers ❤️",
  ];

  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  // rotating badge text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages.length]);

  // cinematic motion
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative w-full min-h-screen sm:min-h-screen md:min-h-[90vh] flex items-center overflow-hidden">

      {/* BACKGROUND */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />

        {/* deep cinematic overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* vignette */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* ONE-TIME LIGHT SWEEP */}
        <motion.div
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      </motion.div>

      {/* FLOATING BADGE */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute right-3 sm:right-4 md:right-8 top-20 sm:top-24 md:top-28 bg-[#6a1b1b] text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2 md:py-2 rounded-lg shadow-xl flex items-center gap-2 z-20 flex-wrap sm:flex-nowrap"
      >
        <FaHeart className="text-xs sm:text-sm md:text-base flex-shrink-0" />

        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm md:text-base whitespace-normal sm:whitespace-nowrap"
          >
            {messages[index]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-20 w-full max-w-2xl sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6 py-28 sm:py-32 md:py-20 lg:py-28 flex flex-col items-start gap-6 sm:gap-8 md:gap-10">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl text-white"
        >
          Healing Relationships.
          <span className="block text-white/90">
            Restoring What Truly Matters.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
        >
          Real guidance. Real support. Real transformation—helping individuals,
          couples, and families rebuild trust and rediscover meaningful connection.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-5"
        >
          <Link
            to="/counselling"
            className="bg-[#6a1b1b] text-white hover:bg-[#5a1515] px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3 rounded-md text-xs sm:text-sm md:text-sm font-semibold transition shadow-lg text-center"
          >
            Get Counselling
          </Link>

          <Link
            to="/support"
            className="border border-white hover:bg-white text-white hover:text-black px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3 rounded-md text-xs sm:text-sm md:text-sm font-semibold transition text-center"
          >
            Join Support Program
          </Link>
        </motion.div>

        {/* 🔥 BOLD STATEMENT (REPLACES SMALL ELEMENTS) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-14 md:mt-16 max-w-2xl"
        >
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-lg italic border-l-2 border-[#6a1b1b] pl-4 sm:pl-5 md:pl-6">
            "Because every relationship deserves clarity, healing, and a second chance."
          </p>
        </motion.div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-t from-black/70 to-transparent"></div>

    </section>
  );
}
