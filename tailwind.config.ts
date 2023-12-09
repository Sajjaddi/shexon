import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // 👇 Add CSS variables
        vazir: ["var(--font-vazir)"],
        sfpro: ["var(--font-sfpro)"],
        inter: ["var(--font-inter)"],
      },
      maxWidth: {
        "8xl": "1300px",
      },
      colors: {
        green: "#00A0A9",
        darkGreen: "#00373A",
        neutral: {
          "0": "#000000",
          "10": "#2e3132",
          "20": "#444749",
          "30": "#5c5f60",
          "40": "#757779",
          "50": "#8f9193",
          "60": "#a9abad",
          "70": "#c5c7c8",
          "80": "#e1e3e4",
          "90": "#eff1f3",
          "95": "#f8f9fb",
          "99": "#fbfcfe",
          "100": "#fff",
        },
        primary: {
          "0": "#000000",
          "10": "#001f29",
          "20": "#003545",
          "30": "#004d62",
          "40": "#006782",
          "50": "#0081a3",
          "60": "#009dc5",
          "70": "#00ccff",
          "80": "#5dd4ff",
          "90": "#bbe9ff",
          "95": "#dff4ff",
          "99": "#f3faff",
          "100": "#f8f9fb",
        },
      },
    },
  },
  plugins: [],
};
export default config;
