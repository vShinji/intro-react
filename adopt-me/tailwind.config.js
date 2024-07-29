/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      boxShadow: {
        default: "0px 0px 12px #aaa, -0px -0px 12px #fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
