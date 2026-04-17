import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNgoAI } from "../../ai/useNgoAI";
import { detectLanguage } from "../../ai/detectLanguage";
import { MessageCircle, X } from "lucide-react";

export default function NgoAIFloatingWidget() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [lang, setLang] = useState("en");

  const location = useLocation();

  const page =
    location.pathname === "/"
      ? "home"
      : location.pathname.replace("/", "") || "home";

  const results = useNgoAI(query, page, lang);

  // 🧠 SMART ACTION ENGINE (NEW)
  const handleSmartActions = (text) => {
    const q = text.toLowerCase();

    const isLocationIntent =
      q.includes("where") ||
      q.includes("location") ||
      q.includes("address") ||
      q.includes("map") ||
      q.includes("direction") ||
      q.includes("office");

    const isCounsellingIntent =
      q.includes("counsel") ||
      q.includes("marriage") ||
      q.includes("therapy") ||
      q.includes("relationship");

    const isDonateIntent =
      q.includes("donate") || q.includes("support") || q.includes("fund");

    const isVolunteerIntent =
      q.includes("volunteer") || q.includes("join") || q.includes("help");

    // 📍 LOCATION ACTION
    if (isLocationIntent) {
      const section = document.getElementById("map-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        window.open(
          "https://www.google.com/maps/dir/?api=1&destination=43+Sijuwola+Street+Ago+Palace+Way+Okota+Lagos",
          "_blank"
        );
      }, 600);
    }

    // 💍 COUNSELLING ACTION (scroll to contact form if exists)
    if (isCounsellingIntent) {
      const section = document.getElementById("contact-form");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }

    // 💰 DONATION ACTION
    if (isDonateIntent) {
      const section = document.getElementById("donation-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }

    // 🤝 VOLUNTEER ACTION
    if (isVolunteerIntent) {
      const section = document.getElementById("volunteer-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendMessage = () => {
    if (!query.trim()) return;

    const detected = detectLanguage(query);
    setLang(detected);

    const userMsg = { type: "user", text: query };

    // 🧠 improved fallback logic
    const reply =
      results.length > 0
        ? results[0][detected].a
        : "I couldn’t find an exact answer. Please contact our team for assistance.";

    const aiMsg = { type: "ai", text: reply };

    setMessages((prev) => [...prev, userMsg, aiMsg]);

    // ⚡ SMART ACTION TRIGGER
    handleSmartActions(query);

    setQuery("");
  };

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (e) => {
      setQuery(e.results[0][0].transcript);
    };

    recognition.start();
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-28 right-10 bg-black text-white p-4 rounded-full z-50 shadow-lg"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white border rounded-xl shadow-xl flex flex-col z-50">

          <div className="p-3 border-b font-semibold">
            NGO Assistant
          </div>

          {/* Chat */}
          <div className="p-3 h-64 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded text-sm max-w-[90%] ${
                  m.type === "user"
                    ? "bg-black text-white ml-auto"
                    : "bg-gray-100"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 border px-2 py-1 rounded text-sm"
              placeholder="Ask something..."
            />

            <button onClick={startVoice}>🎤</button>

            <button
              onClick={sendMessage}
              className="bg-black text-white px-3 rounded"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}