export function detectLanguage(text) {
  const t = text.toLowerCase();

  if (t.includes("bonjour") || t.includes("merci")) return "fr";
  if (t.includes("ẹ") || t.includes("ọ") || t.includes("ṣ")) return "yo";

  return "en";
}