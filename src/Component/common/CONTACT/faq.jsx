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
    category: "donor",
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
    icon: Landmark,
    category: "donor",
    key: "funding",
    en: {
      q: "How are your projects funded?",
      a: "We rely on donations, grants, CSR partnerships, and institutional support."
    },
    fr: {
      q: "Comment vos projets sont-ils financés ?",
      a: "Nos projets sont financés par des dons, subventions et partenariats institutionnels."
    },
    yo: {
      q: "Báwo ni ẹ ṣe ń rí owó fún àwọn iṣẹ́ yín?",
      a: "A ń rí ìdáwọ́lé owó látinú ẹ̀bùn, ìrànlọ́wọ́ àti àjọṣepọ̀ ilé-iṣẹ́."
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
    icon: ShieldCheck,
    category: "donor",
    key: "transparency",
    en: {
      q: "Are donations transparent and accountable?",
      a: "Yes, we publish regular financial and impact reports."
    },
    fr: {
      q: "Les dons sont-ils transparents ?",
      a: "Oui, nous publions des rapports financiers et d’impact réguliers."
    },
    yo: {
      q: "Ṣé ẹ̀bùn jẹ́ ohun tí a lè fọkàn tán?",
      a: "Bẹ́ẹ̀ ni, a máa ń ṣàfihàn ìròyìn ináwó àti ipa iṣẹ́ wa."
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
    category: "donor",
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
    category: "donor",
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
    icon: HandHeart,
    category: "donor",
    key: "taxbenefits",
    en: {
      q: "Are donations tax-deductible?",
      a: "Yes, all donations are eligible for tax deductions under Nigerian law."
    },
    fr: {
      q: "Les dons sont-ils déductibles des impôts ?",
      a: "Oui, tous les dons sont déductibles selon la loi nigériane."
    },
    yo: {
      q: "Ṣé ẹ̀bùn lè jẹ́ kí owó-ori dínkù?",
      a: "Bẹ́ẹ̀ ni, gbogbo ẹ̀bùn jẹ́ ohun tí a lè dín owó-ori kù nípa òfin Naijiria."
    }
  },
  {
    icon: ShieldCheck,
    category: "partner",
    key: "data",
    en: {
      q: "How do you protect donor and volunteer data?",
      a: "We follow strict data protection policies and use secure systems to safeguard information."
    },
    fr: {
      q: "Comment protégez-vous les données des donateurs et bénévoles ?",
      a: "Nous suivons des politiques strictes de protection des données et utilisons des systèmes sécurisés."
    },
    yo: {
      q: "Báwo ni ẹ ṣe ń dáàbò bo àwọn àlàyé àwọn olùdásílẹ̀ àti olùyọ̀ọ́da?",
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
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <HelpCircle className="mx-auto mb-3 text-gray-700" size={30} />
          <h2 className="text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Search, filter, and explore answers in your preferred language.
          </p>
        </div>

        {/* CONTROLS */}
        <div className="space-y-4 mb-8">

          {/* Language Toggle */}
          <div className="flex justify-center gap-2">
            {["en", "fr", "yo"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-1.5 text-sm border rounded-full ${
                  lang === l
                    ? "bg-black text-white"
                    : "bg-white text-gray-700"
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
            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none bg-white"
          />

          {/* Filter */}
          <div className="flex justify-center gap-2 flex-wrap">
            {["all", "donor", "volunteer", "partner"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 text-xs border rounded-full ${
                  filter === f
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-3">
          {filteredFAQs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-gray-100 rounded-lg">
                      <Icon size={18} className="text-gray-700" />
                    </span>

                    <span className="font-medium text-gray-800">
                      {faq[lang].q}
                    </span>
                  </div>

                  <span className="text-xl text-gray-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1">
                    <p className="text-gray-600 border-t pt-4 leading-relaxed">
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