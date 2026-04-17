import { FaHome, FaHandsHelping, FaRegSmileBeam } from "react-icons/fa";

export default function WhoWeHelp() {
  const programs = {
    counselling: [
      { name: "Relationships & Life Stages", items: ["Married Couples", "Engaged Couples", "Singles"] },
      { name: "Marriage in Diaspora", items: ["Long Distance", "Immigration Stress", "Cultural Adjustment"] },
      { name: "Parenting", items: ["New Parents", "Teen Guidance", "Family Counseling"] },
    ],
    support: ["Orphanage Home", "Divorced Individuals", "Widows & Widowers"],
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10 rounded-3xl ">

        {/* SECTION HEADER */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Who We Help
          </h2>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
            At <span className="font-semibold text-[#6a1b1b]">Look Up Love</span>, 
            we provide guidance, healing, and support for people at different stages of life. 
            From counselling to community outreach, our mission is to empower, restore, and inspire.
          </p>
          <p className="mt-8 italic text-[#6a1b1b] text-lg font-light">
            “Guided by compassion, driven by purpose.”
          </p>
        </div>

        {/* GOLDEN DIVIDER */}
        <div className="relative my-20">
          <div className="h-1 w-2/3 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
        </div>

        {/* COUNSELLING PROGRAMS */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-[#6a1b1b] mb-10 text-center">Counselling Programs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.counselling.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-10 border border-yellow-400/30"
              >
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">
                  {program.name}
                </h4>
                <ul className="space-y-3">
                  {program.items.map((itemText, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-lg">
                      <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mr-3"></span>
                      {itemText}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* GOLDEN DIVIDER */}
        <div className="relative my-28">
          <div className="h-1 w-2/3 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
        </div>

        {/* COMMUNITY SUPPORT */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold text-[#6a1b1b] mb-10 text-center">Community Support</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.support.map((supportItem, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border border-yellow-400/30"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#6a1b1b] to-[#631818] text-white mb-6 shadow-lg border-2 border-yellow-400">
                  {supportItem === "Orphanage Home" && <FaHome size={28} />}
                  {supportItem === "Divorced Individuals" && <FaHandsHelping size={28} />}
                  {supportItem === "Widows & Widowers" && <FaRegSmileBeam size={28} />}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {supportItem}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
                                                                                                             