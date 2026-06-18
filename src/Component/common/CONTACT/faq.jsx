import React, { useMemo, useState } from "react";
import {
  HandHeart,
  Landmark,
  Handshake,
  ShieldCheck,
  Users,
  Globe,
  Eye,
  FileText,
  Bell,
  HelpCircle
} from "lucide-react";

/* -----------------------------
   MULTILINGUAL CONTENT BASE
------------------------------ */

const FAQ_DATA = [
  {
    icon: HandHeart,
    category: "general",
    key: "mission",
    en: {
      q: "What is the core mission of your organization?",
      a: "We empower underserved communities through education, healthcare support, and sustainable development programs."
    },
    fr: {
      q: "Quelle est la mission principale de votre organisation ?",
      a: "Nous autonomisons les communautés défavorisées grâce à l’éducation, la santé et des programmes de développement durable."
    },
    yo: {
      q: "Kí ni iṣẹ́ àfojúsùn àjọ yín?",
      a: "A ń fún àwọn àgbègbè aláìní lókun nípasẹ̀ ẹ̀kọ́, ìlera àti àwọn eto ìdàgbàsókè tó péye."
    }
  },
  {
    icon: Users,
    category: "volunteer",
    key: "volunteer",
    en: {
      q: "Can I volunteer remotely or internationally?",
      a: "Yes, we offer both remote and on-site volunteering opportunities."
    },
    fr: {
      q: "Puis-je faire du bénévolat à distance ou à l’international ?",
      a: "Oui, nous proposons du bénévolat à distance et sur site."
    },
    yo: {
      q: "Ṣé mo lè ṣe iṣẹ́ olùyọ̀ọ́da látọ́na jíjìn tàbí orílẹ̀-èdè míì?",
      a: "Bẹ́ẹ̀ ni, a ní iṣẹ́ olùyọ̀ọ́da látọ́na àti ní ojúlé."
    }
  },
  {
    icon: Handshake,
    category: "partner",
    key: "partnership",
    en: {
      q: "Can organizations partner with your NGO?",
      a: "Yes, we welcome CSR and institutional partnerships."
    },
    fr: {
      q: "Les organisations peuvent-elles collaborer avec votre ONG ?",
      a: "Oui, nous acceptons les partenariats institutionnels et RSE."
    },
    yo: {
      q: "Ṣé àwọn ilé-iṣẹ́ lè bá a jọ ṣiṣẹ́?",
      a: "Bẹ́ẹ̀ ni, a gba àjọṣepọ̀ CSR àti ìbáṣiṣẹ́ pọ̀."
    }
  },
  {
    icon: Bell,
    category: "general",
    key: "updates",
    en: {
      q: "How can I stay updated?",
      a: "Subscribe to our newsletter or follow our official channels."
    },
    fr: {
      q: "Comment rester informé ?",
      a: "Abonnez-vous à notre newsletter ou suivez nos canaux officiels."
    },
    yo: {
      q: "Báwo ni mo ṣe lè máa gba ìmúdójúìwọ̀n?",
      a: "Ṣe ìforúkọsílẹ̀ sí ìwé ìròyìn wa tàbí tẹ̀lé wa lórí ayélujára."
    }
  },
  /* -----------------------------
     NEWLY ADDED FAQ ENTRIES
  ------------------------------ */
  {
    icon: Globe,
    category: "general",
    key: "impact",
    en: {
      q: "Where does your NGO operate?",
      a: "We work across Nigeria and collaborate with international partners for broader impact."
    },
    fr: {
      q: "Où votre ONG opère-t-elle ?",
      a: "Nous travaillons au Nigeria et collaborons avec des partenaires internationaux."
    },
    yo: {
      q: "Níbo ni NGO yín ti ń ṣiṣẹ́?",
      a: "A ń ṣiṣẹ́ káàkiri Naijiria àti pẹ̀lú àwọn alábàáṣiṣẹ́ orílẹ̀-èdè míì."
    }
  },
  {
    icon: Eye,
    category: "general",
    key: "monitoring",
    en: {
      q: "How do you measure project success?",
      a: "We track outcomes through community feedback, independent audits, and impact assessments."
    },
    fr: {
      q: "Comment mesurez-vous le succès des projets ?",
      a: "Nous suivons les résultats via les retours communautaires, audits indépendants et évaluations d’impact."
    },
    yo: {
      q: "Báwo ni ẹ ṣe ń ṣe àyẹ̀wò àṣeyọrí iṣẹ́?",
      a: "A ń tọ́pa àwọn abajade nípasẹ̀ ìfọ̀rọ̀wánilẹ́nuwò àwùjọ, àyẹ̀wò olómìnira àti ìdánwò ipa."
    }
  },
  {
    icon: FileText,
    category: "volunteer",
    key: "requirements",
    en: {
      q: "Do volunteers need specific qualifications?",
      a: "No, anyone passionate about community service can join. Training is provided."
    },
    fr: {
      q: "Les bénévoles doivent-ils avoir des qualifications spécifiques ?",
      a: "Non, toute personne passionnée par le service communautaire peut participer. Une formation est fournie."
    },
    yo: {
      q: "Ṣé àwọn olùyọ̀ọ́da nílò ìwé-ẹ̀rí pàtó?",
      a: "Rárá, ẹnikẹ́ni tó nífẹ̀ẹ́ sí iṣẹ́ àwùjọ lè darapọ̀. A ń fún ní ìkànsí."
    }
  },
  {
    icon: ShieldCheck,
    category: "partner",
    key: "data",
    en: {
      q: "How do you protect personal and volunteer data?",
      a: "We follow strict data protection policies and use secure systems to safeguard information."
    },
    fr: {
      q: "Comment protégez-vous les données personnelles et des bénévoles ?",
      a: "Nous suivons des politiques strictes de protection des données et utilisons des systèmes sécurisés."
    },
    yo: {
      q: "Báwo ni ẹ ṣe ń dáàbò bo àlàyé ara ẹni àti àwọn olùyọ̀ọ́da?",
      a: "A ń tẹ̀lé ìlànà ààbò àlàyé tó muna àti lílo àwọn eto tó dájú."
    }
  }
];

/* -----------------------------
   COMPONENT
------------------------------ */

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [lang, setLang] = useState("en");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const content = item[lang];
      const matchesSearch =
        content.q.toLowerCase().includes(search.toLowerCase()) ||
        content.a.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" || item.category === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter, lang]);

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 px-2 sm:px-0">
          <HelpCircle className="mx-auto mb-3 text-gray-700" size={32} />
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Search, filter, and explore answers in your preferred language.
          </p>
        </div>

        {/* CONTROLS */}
        <div className="space-y-4 mb-8">

          {/* Language Toggle */}
          <div className="flex flex-wrap justify-center gap-2">
            {["en", "fr", "yo"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 text-sm sm:text-base border rounded-full transition ${
                  lang === l
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {l === "en" ? "English" : l === "fr" ? "Français" : "Yorùbá"}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none bg-white"
          />

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {["all", "volunteer", "partner"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-2 text-xs sm:text-sm border rounded-full transition ${
                  filter === f
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-5 py-4 sm:py-5 text-left gap-3"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="p-2 sm:p-3 bg-gray-100 rounded-lg">
                      <Icon size={18} className="text-gray-700" />
                    </span>

                    <span className="font-medium text-gray-800 text-sm sm:text-base">
                      {faq[lang].q}
                    </span>
                  </div>

                  <span className="text-2xl text-gray-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1">
                    <p className="text-gray-600 border-t pt-4 text-sm sm:text-base leading-relaxed">
                      {faq[lang].a}
                    </p>
                  </div>
                )}
              </div>
            ); 
          })}
        </div>

      </div>
    </section>
  );
}