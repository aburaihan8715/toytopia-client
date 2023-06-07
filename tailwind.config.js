/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e13aea",

          secondary: "#b54936",

          accent: "#3d63af",

          neutral: "#1b171c",

          "base-100": "#37323e",

          info: "#9eadfa",

          success: "#1bb173",

          warning: "#fbac0e",

          error: "#ee4f7e",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
