export default function TeamSection() {
  const team = [
    {
      name: "Jane Doe",
      role: "Founder & Lead Counselor",
      bio: "Provides relationship guidance and emotional wellness counseling to individuals and families.",
    },
    {
      name: "Michael Johnson",
      role: "Community Outreach Coordinator",
      bio: "Leads outreach programs and support initiatives for widows, widowers, and community members.",
    },
    {
      name: "Sarah Williams",
      role: "Programs & Mentorship Lead",
      bio: "Coordinates mentorship initiatives and educational programs focused on healthy relationships.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto px-4 sm:px-0">
          <span className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-yellow-500">
            Our Team
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-[40px] lg:text-[50px] font-semibold text-white leading-[1.15] tracking-tight">
            The People Behind
            <span className="block font-light mt-3 text-base sm:text-lg text-white/80">
              Our Mission
            </span>
          </h2>

          <div className="mt-6 w-20 sm:w-24 h-[2px] bg-yellow-500 mx-auto"></div>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
            Our team is dedicated to supporting individuals, couples, and
            families through compassionate counseling, mentorship, and
            community outreach programs.
          </p>

          {/* Tagline */}
          <p className="mt-8 italic text-yellow-400 text-base sm:text-lg font-light">
            “Guided by compassion, driven by purpose.”
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 border border-yellow-500/40 rounded-2xl shadow-[0_10px_40px_rgba(255,215,0,0.15)] bg-gradient-to-b from-black to-black/90 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-yellow-500 text-xs sm:text-sm mt-2 tracking-wide uppercase">
                {member.role}
              </p>
              <div className="mt-4 w-12 h-[2px] bg-yellow-500 mx-auto"></div>
              <p className="mt-6 text-white/70 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
