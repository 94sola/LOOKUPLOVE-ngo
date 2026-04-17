/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 10px rgba(250,204,21,0.4)" },
          "50%": { boxShadow: "0 0 25px rgba(250,204,21,0.8)" },
          "100%": { boxShadow: "0 0 10px rgba(250,204,21,0.4)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        shimmer: "shimmer 2.5s infinite linear",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
