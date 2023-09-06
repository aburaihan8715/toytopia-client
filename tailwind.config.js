/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#58d39a",

          secondary: "#ef3afc",

          accent: "#5aa31b",

          neutral: "#1c1424",

          "base-100": "#dcfce7",

          info: "#a7d9f1",

          success: "#79e6b9",

          warning: "#e58b15",

          error: "#df4349",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
