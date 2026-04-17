import { useMemo } from "react";
import { FAQ_DATA } from "./faqData";
import { pageContexts } from "./contextMap";

function score(item, query, page, lang) {
  let s = 0;
  const q = query.toLowerCase();

  // ✅ use selected language instead of hardcoded "en"
  const text = `${item[lang].q} ${item[lang].a}`.toLowerCase();

  if (text.includes(q)) s += 5;

  item.tags.forEach((tag) => {
    if (q.includes(tag)) s += 3;
  });

  pageContexts[page]?.focus.forEach((f) => {
    if (text.includes(f)) s += 2;
  });

  return s;
}

export function useNgoAI(query, page = "home", lang = "en") {
  return useMemo(() => {
    if (!query) return [];

    return FAQ_DATA
      .map((item) => ({
        ...item,
        score: score(item, query, page, lang) // ✅ pass lang here
      }))
      .filter((i) => i.score > 2)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

  }, [query, page, lang]); // ✅ now lang is VALID and used
}