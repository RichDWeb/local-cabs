/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        gochihand: ["GochiHand", "sans-serif"],
      },
      colors: {
        primary: "#F69511",
        secondary: "#fce0b7",
        heading: "#0f172a",
        body: "#334155",
        border: "#cbd5e1",
        alice: "#F1F5F9",
        fiord: "#475569",
        light: "#fefaef40"

      },

      animation: {
        marquee: "marquee 25s linear infinite", // Adjust the duration as needed
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
