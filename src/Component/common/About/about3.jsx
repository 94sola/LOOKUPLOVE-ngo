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
    <section ref={sectionRef} className="py-32 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= MISSION & VISION ================= */}
        <div className="text-center max-w-4xl mx-auto">

          <h2 className="reveal text-4xl sm:text-5xl font-semibold text-[#6a1b1b]">
            Our Purpose & Direction
          </h2>

          {/* Mission */}
          <div className="reveal mt-12">
            <h3 className="text-xs tracking-[0.4em] uppercase text-[#6a1b1b]/60">
              Mission
            </h3>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Look Up Love was founded with a clear mission — to restore emotional
              well-being and strengthen relationships through intentional guidance,
              counselling, and compassionate support.
            </p>
          </div>

          {/* Vision */}
          <div className="reveal mt-12">
            <h3 className="text-xs tracking-[0.4em] uppercase text-[#6a1b1b]/60">
              Vision
            </h3>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Through mentorship and community outreach programs, the foundation
              helps individuals and families rebuild trust, rediscover purpose,
              and cultivate meaningful relationships that endure.
            </p>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="reveal my-20 flex justify-center">
          <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#6a1b1b] to-transparent"></div>
        </div>

        {/* ================= AIM + GOALS ================= */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Aim */}
          <div className="reveal">
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Aim
            </h3>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              To create safe environments where individuals rediscover purpose,
              rebuild trust, and develop emotional strength for healthy relationships.
            </p>
          </div>

          {/* Goals */}
          <div className="reveal">
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Goals
            </h3>

            <ul className="mt-6 space-y-4">
              {goals.map((goal, i) => (
                <li key={i} className="flex items-start text-gray-600">
                  <span className="w-2 h-2 mt-2 bg-[#6a1b1b] rounded-full mr-3"></span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ================= VALUES ================= */}
        <div className="reveal mt-24 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Our Core Values
          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {values.map((value, i) => (
              <div
                key={i}
                className="px-6 py-3 border border-[#6a1b1b]/20 rounded-full text-sm text-gray-700
                hover:bg-[#6a1b1b] hover:text-white transition duration-300"
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