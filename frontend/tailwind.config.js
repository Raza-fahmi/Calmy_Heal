/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Meditation: "url('/src/assets/image/backgroundmeditasi.png')",
      },
      colors: {
        primary: "#04364A",
        secondary: "#176B87",
        third: "#C4EAE8",
        fourt: "#F9FAF9",
        fifth: "#F2F2F2",
        sixth: "#28b4d1",
        seventh: "#DAFFFB",
        eighth: "#4fa7a9",
        "seventh-25": "rgba(218, 255, 251, 0.25)",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
