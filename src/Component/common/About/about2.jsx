import { useEffect, useRef, useState } from "react";
import founderImage from "../../../assets/images/founder.jpg";

export default function AboutSection() {
  const sectionRef = useRef(null);

  // Scroll reveal system
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
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Tilt interaction
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - bounds.top) / bounds.height - 0.5;
    const y = (e.clientX - bounds.left) / bounds.width - 0.5;

    setRotate({
      x: x * 6,
      y: y * -6,
    });
  };

  const resetTilt = () => setRotate({ x: 0, y: 0 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= FOUNDER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT STORY */}
          <div className="reveal">

            <span className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-[#6a1b1b]/70">
              Our Founder
            </span>

            <h2 className="mt-6 text-3xl sm:text-[40px] md:text-[50px] font-semibold text-[#6a1b1b] leading-[1.15] tracking-tight">
              Leading with Compassion,
              <span className="block font-light mt-3 text-gray-900 text-base sm:text-lg">
                Guided by Purpose
              </span>
            </h2>

            <p className="mt-8 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
              The inspiration behind Look Up Love began with a deep commitment
              to helping individuals and families navigate the emotional
              challenges that often affect relationships and personal growth.
              The founder envisioned a space where people could find guidance,
              understanding, and practical support during difficult moments in
              their lives.
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
              With years of experience advocating for emotional wellness and
              relationship development, the founder established Look Up Love as
              a platform dedicated to counselling, mentorship, and community
              outreach. Through these initiatives, the organization works to
              strengthen relationships, encourage healthy communication, and
              promote emotional resilience.
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
              Today, the foundation continues to support individuals, couples,
              widows, widowers, and families by providing structured programs
              and compassionate guidance that inspire healing, personal
              transformation, and renewed hope.
            </p>

            <p className="mt-10 italic text-sm sm:text-base text-gray-800 border-l-2 border-[#6a1b1b] pl-4 sm:pl-6">
              “Transformation happens when guidance meets genuine care.”
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-900">
                Founder, Look Up Love
              </p>
              <p className="text-sm text-gray-600">
                Relationship & Emotional Wellness Advocate
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="reveal flex justify-center lg:justify-end">

            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
              }}
              className="relative transition-transform duration-300 ease-out"
            >

              <div className="absolute inset-0 rounded-full bg-[#6a1b1b]/20 blur-3xl scale-105 sm:scale-110"></div>

              <img
                src={founderImage}
                alt="Founder"
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-[0_35px_90px_rgba(0,0,0,0.25)]"
              />

            </div>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="reveal my-20 sm:my-28 flex justify-center">
          <div className="w-full sm:w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#6a1b1b] to-transparent"></div>
        </div>

        {/* ================= NGO PROFILE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

          {/* NGO PROFILE */}
          <div className="reveal bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.08)] border border-gray-100">

            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#6a1b1b]/70">
              NGO Profile
            </span>

            <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-900">
              Supporting Emotional Wellness and Relationships
            </h3>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              Look Up Love is a non-profit organization dedicated to promoting
              emotional well-being and strengthening relationships within
              families and communities. The foundation provides counselling,
              mentorship, and educational programs designed to help individuals
              navigate personal challenges and build healthier connections.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Through compassionate guidance and community-centered initiatives,
              the organization works with individuals, couples, widows,
              widowers, and vulnerable families to create environments where
              healing, growth, and positive transformation can take place.
            </p>

          </div>

          {/* COMMUNITY IMPACT */}
<div className="reveal bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.08)] border border-gray-100">

            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#6a1b1b]/70">
              Our Commitment
            </span>

            <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-900">
              Building Stronger Communities
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Beyond counselling services, Look Up Love actively engages in
              outreach programs that support widows, widowers, and community
              members in need of emotional and relational guidance.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              By fostering open conversations, mentorship opportunities, and
              supportive networks, the organization aims to inspire hope,
              strengthen relationships, and contribute to healthier,
              more compassionate communities.
            </p>

          </div>

        </div>

      </div>

      {/* ================= ANIMATION ================= */}
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </section>
  );
}