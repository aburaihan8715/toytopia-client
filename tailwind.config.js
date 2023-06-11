/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c695e5",

          secondary: "#b418c9",

          accent: "#cc4a22",

          neutral: "#25212b",

          "base-100": "#f9f4fa",

          info: "#a6b5ed",

          success: "#208875",

          warning: "#f68c13",

          error: "#f66a75",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
