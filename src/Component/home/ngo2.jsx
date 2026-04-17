import { motion } from "framer-motion";
import { FaHeart, FaUserFriends, FaSeedling, FaHandsHelping, FaHome, FaRegSmile } from "react-icons/fa";

export default function Programs() {
  const programs = [
    {
      icon: <FaUserFriends size={28} />,
      title: "Marriage Counseling",
      description:
        "Helping couples strengthen communication, rebuild trust, resolve conflicts, and nurture healthy marriages."
    },
    {
      icon: <FaHeart size={28} />,
      title: "Pre-Marriage Guidance",
      description:
        "Preparing couples for successful marriages through mentorship, communication training, and relationship education."
    },
    {
      icon: <FaHandsHelping size={28} />,
      title: "Divorce Recovery Support",
      description:
        "Providing emotional healing, counseling, and guidance for individuals navigating life after divorce."
    },
    {
      icon: <FaSeedling size={28} />,
      title: "Relationship Coaching",
      description:
        "Helping singles and new couples build confidence, emotional intelligence, and strong relationship foundations."
    },
    {
      icon: <FaHome size={28} />,
      title: "Orphanage Support",
      description:
        "Offering care, mentorship, and resources to orphaned children, helping them grow in love, stability, and hope."
    },
    {
      icon: <FaRegSmile size={28} />,
      title: "Widow & Widower Care",
      description:
        "Providing emotional support, counseling, and community programs to empower widows and widowers in their healing journey."
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6a1b1b]/5 via-transparent to-[#6a1b1b]/10 animate-pulse"></div>

        {/* Abstract blurred circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6a1b1b]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6a1b1b]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Counseling & Support Programs
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Look Up Love provides structured counseling and community programs designed
            to strengthen relationships, promote healing, and uplift individuals and families
            toward healthy emotional connections.
          </p>
        </motion.div>

        {/* PROGRAM CARDS */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl 
                         transition-all duration-300 border border-gray-100 hover:border-[#6a1b1b]/40"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                              bg-[#6a1b1b] text-white mb-6 group-hover:scale-110 
                              transition-transform duration-300 shadow-lg">
                {program.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#6a1b1b] transition-colors">
                {program.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {program.description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 w-12 h-[3px] bg-[#6a1b1b] rounded-full opacity-0 
                              group-hover:opacity-100 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional Wave Divider */}
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
