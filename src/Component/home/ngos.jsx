export default function About() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-white text-gray-900">
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-80px] left-[-80px] sm:top-[-120px] sm:left-[-120px] w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-[#6a1b1b]/10 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-[-80px] right-[-80px] sm:bottom-[-120px] sm:right-[-120px] w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-[#6a1b1b]/10 rounded-full blur-[110px] sm:blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="w-14 h-[3px] bg-[#6a1b1b] mb-6 rounded-full" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            About <span className="text-[#6a1b1b]">Look Up Love</span>
          </h2>

          {/* Golden Divider */}
          <div className="w-20 sm:w-24 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full mb-8"></div>

          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
            Look Up Love is a relationship and emotional wellness initiative dedicated to restoring hope, strengthening families, and nurturing meaningful human connections.
          </p>

          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
            Our work focuses on providing structured counselling programs that address real-life relationship challenges.
          </p>

          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
            Through compassion, professionalism, and a deep commitment to impact, we create safe, trusted spaces where people can heal, grow, and thrive.
          </p>

          <button className="mt-8 px-6 py-3 sm:px-7 sm:py-3 rounded-md font-semibold bg-[#6a1b1b] text-white hover:bg-[#571515] transition">
            Learn More
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 max-w-md w-full">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#6a1b1b]">
              Our Vision
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              To be a beacon of hope and transformation, inspiring love that
              transcends challenges and builds stronger families and communities
              across the world.
            </p>

            <div className="border-t pt-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#6a1b1b]">
                Core Values
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                <li>Compassion & Empathy</li>
                <li>Commitment to Growth</li>
                <li>Community Impact</li>
                <li>Integrity & Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
