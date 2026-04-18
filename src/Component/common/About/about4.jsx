import { useEffect, useRef } from "react";

export default function CoreValuesSection() {
  const sectionRef = useRef(null);

  // Scroll reveal
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

  const values = [
    {
      title: "Compassion",
      text: "We approach every individual and family with empathy, understanding, and genuine care, creating safe spaces where people feel heard and supported.",
    },
    {
      title: "Integrity",
      text: "Our work is guided by honesty, transparency, and ethical responsibility, ensuring that our programs remain trustworthy and impactful.",
    },
    {
      title: "Community",
      text: "We believe meaningful change happens when communities support one another and work together toward healthier relationships.",
    },
    {
      title: "Growth",
      text: "We encourage continuous personal development, helping individuals rediscover purpose, strengthen resilience, and embrace positive change.",
    },
    {
      title: "Respect",
      text: "Every person’s story matters. We honor dignity, diversity, and the unique experiences of the people we serve.",
    },
    {
      title: "Commitment",
      text: "Our dedication to emotional wellness and healthy relationships drives every program, outreach, and initiative we undertake.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto px-4 sm:px-0 reveal">

          <span className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-white/60">
            Our Values
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-[40px] lg:text-[50px] font-semibold text-white leading-[1.15] tracking-tight">
            Principles That Guide
            <span className="block font-light mt-3 text-base sm:text-lg text-white/80">
              Everything We Do
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
            Our work is rooted in values that shape how we support individuals,
            families, and communities through counseling, mentorship,
            and outreach programs.
          </p>

        </div>

        {/* VALUES GRID */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

          {values.map((value, index) => (
            <div
              key={index}
              className="reveal bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_25px_80px_rgba(255,255,255,0.05)]"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {value.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* ANIMATION */}
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