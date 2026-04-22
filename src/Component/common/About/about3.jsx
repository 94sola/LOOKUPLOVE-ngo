import { useEffect, useRef } from "react";

export default function MissionSection() {
  const sectionRef = useRef(null);

  // 👇 Lightweight scroll reveal (NO framer motion)
  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const goals = [
    "Deliver accessible and professional counselling services",
    "Support widows, widowers, and orphanage homes",
    "Promote emotional well-being within communities",
    "Provide relationship education and mentorship",
    "Expand outreach programs with lasting impact",
  ];

  const values = [
    "Compassion",
    "Integrity",
    "Growth",
    "Respect",
    "Commitment",
    "Community",
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= MISSION & VISION ================= */}
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-0">

          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-semibold text-[#6a1b1b]">
            Our Purpose & Direction
          </h2>

          {/* Mission */}
          <div className="reveal mt-10 sm:mt-12">
            <h3 className="text-xs tracking-[0.4em] uppercase text-[#6a1b1b]/60">
              Mission
            </h3>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              LOOKUPLOVE is committed to strengthening marriages and families by providing counselling, guidance, and support to newly wedded couples, especially those preparing to emigrate or living in the diaspora. We strive to promote stability, wellbeing, and resilience in relationships facing social and economic challenges. Through compassionate care, practical resources, and community engagement, LOOKUPLOVE empowers couples to build enduring bonds, navigate cultural transitions, and thrive together in diverse environments.
            </p>
          </div>

          {/* Vision */}
          <div className="reveal mt-10 sm:mt-12">
            <h3 className="text-xs tracking-[0.4em] uppercase text-[#6a1b1b]/60">
              Vision
            </h3>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              LOOKUPLOVE envisions a world where agencies, partners, and communities work together to alleviate poverty and uplift distressed families. By fostering collaboration with stakeholders and driving impactful programs, LOOKUPLOVE seeks to create sustainable change, improve welfare, and build resilient communities where love, stability, and opportunity flourish.
            </p>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="reveal my-16 sm:my-20 flex justify-center">
          <div className="w-full sm:w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#6a1b1b] to-transparent"></div>
        </div>

        {/* ================= AIM + GOALS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Aim */}
          <div className="reveal">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Our Aim
            </h3>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              We aims to support singles, especially those in the diaspora, who are at critical decision points or crossroads in their personal and family lives. By offering guidance, counselling, and community support, the organization helps individuals navigate challenges, make informed choices, and build strong foundations for future relationships and family wellbeing.
            </p>
          </div>

          {/* Goals */}
          <div className="reveal">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Our Goals
            </h3>

            <ul className="mt-6 space-y-4">
              {goals.map((goal, i) => (
                <li key={i} className="flex items-start text-base sm:text-lg text-gray-600">
                  <span className="w-2 h-2 mt-2 sm:mt-1 bg-[#6a1b1b] rounded-full mr-3 flex-shrink-0"></span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ================= VALUES ================= */}
        <div className="reveal mt-16 sm:mt-24 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Our Core Values
          </h3>

          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {values.map((value, i) => (
              <div
                key={i}
                className="px-4 sm:px-6 py-2.5 sm:py-3 border border-[#6a1b1b]/20 rounded-full text-sm sm:text-base text-gray-700 hover:bg-[#6a1b1b] hover:text-white transition duration-300"
              >
                {value}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= GLOBAL ANIMATION STYLES ================= */}
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </section>
  );
}