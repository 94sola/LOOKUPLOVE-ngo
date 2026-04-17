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
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden">

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
        className="absolute right-4 md:right-8 top-28 bg-[#6a1b1b] text-white px-5 py-2 rounded-lg shadow-xl flex items-center gap-2 z-20"
      >
        <FaHeart />

        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-sm md:text-base"
          >
            {messages[index]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-extrabold leading-[1.05] max-w-4xl text-white"
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
          className="mt-8 text-xl text-gray-200 max-w-xl leading-relaxed"
        >
          Real guidance. Real support. Real transformation—helping individuals,
          couples, and families rebuild trust and rediscover meaningful connection.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-5"
        >
          <Link
            to="/counselling"
            className="bg-[#6a1b1b] text-white hover:bg-[#5a1515] px-8 py-3 rounded-md text-sm font-semibold transition shadow-lg"
          >
            Get Counselling
          </Link>

          <Link
            to="/support"
            className="border border-white hover:bg-white text-white hover:text-black px-8 py-3 rounded-md text-sm font-semibold transition"
          >
            Join Support Program
          </Link>
        </motion.div>

        {/* 🔥 BOLD STATEMENT (REPLACES SMALL ELEMENTS) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-2xl"
        >
          <p className="text-white/70 text-lg italic border-l-2 border-[#6a1b1b] pl-6">
            “Because every relationship deserves clarity, healing, and a second chance.”
          </p>
        </motion.div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent"></div>

    </section>
  );
}