import { useEffect, useRef } from "react";
import aboutHero from "../../../assets/images/gallery3.jpg";

export default function AboutHero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  // Cinematic scroll zoom
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);

      const scale = 1 + progress * 0.05;
      bgRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >

      {/* BACKGROUND */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        <img
          src={aboutHero}
          alt="About Look Up Love"
          className="w-full h-full object-cover object-center"
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

        {/* light sweep */}
        <div className="light-sweep absolute inset-0"></div>
      </div>

      {/* FLOATING BADGE */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 z-20 reveal">
        <div className="px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/30 text-white text-sm tracking-wide shadow-lg">
          Guiding Healing & Healthy Relationships
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <span className="reveal text-[11px] tracking-[0.45em] uppercase text-white/80">
              About Look Up Love
            </span>

            <h1 className="reveal mt-6 max-w-2xl text-[44px] sm:text-[56px] lg:text-[72px] font-semibold text-white leading-[1.1] tracking-tight">
              Restoring Confidence in Love,
              <span className="block font-light text-white/80 mt-3">
                One Life at a Time
              </span>
            </h1>

            <p className="reveal mt-8 text-lg text-white/80 leading-relaxed max-w-xl">
              We guide individuals, couples, and families through emotional
              challenges with clarity, structure, and compassion—helping them
              rebuild trust, rediscover purpose, and create lasting transformation.
            </p>

            {/* SIGNATURE */}
            <div className="reveal mt-12">
              <p className="text-white/80 italic text-[15px]">
                “Healing begins when people feel seen, heard, and guided with intention.”
              </p>

              <div className="mt-4 flex items-center gap-4">

                <div>
                  <p className="text-xs text-white/60">
                    Relationship & Emotional Wellness Advocate
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT - IMPACT */}
          <div className="reveal relative backdrop-blur-md bg-white/90 rounded-3xl p-14 shadow-[0_40px_120px_rgba(0,0,0,0.45)] border border-white/40">

            {/* glow accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6a1b1b]/20 blur-[80px] rounded-full"></div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>

            <h3 className="text-lg font-semibold text-[#6a1b1b] mb-10">
              Our Impact
            </h3>

            <div className="divide-y divide-gray-200/70 text-gray-700">

              {[
                ["Couples Guided", "1500+"],
                ["Individuals Supported", "60+"],
                ["Communities Reached", "5+"],
                ["Years of Service", "8+"],
              ].map(([label, value], i) => (
                <div key={i} className="flex justify-between py-5">
                  <span className="text-sm text-gray-600">{label}</span>
                  <span className="text-xl font-semibold text-[#6a1b1b]">
                    {value}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="scroll-indicator"></div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* STYLES */}
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

        .light-sweep::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.12),
            transparent
          );
          transform: translateX(-120%);
          animation: sweep 2.5s ease-in-out forwards;
        }

        @keyframes sweep {
          to {
            transform: translateX(120%);
          }
        }

        .scroll-indicator {
          width: 22px;
          height: 36px;
          border: 2px solid rgba(255,255,255,0.7);
          border-radius: 20px;
          position: relative;
        }

        .scroll-indicator::after {
          content: "";
          width: 4px;
          height: 6px;
          background: white;
          border-radius: 10px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 2s infinite;
        }

        @keyframes scroll {
          0% { opacity: 0; transform: translate(-50%,0); }
          40% { opacity: 1; }
          80% { transform: translate(-50%,12px); opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>

    </section>
  );
}