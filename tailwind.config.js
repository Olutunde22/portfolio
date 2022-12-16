/* eslint-disable prettier/prettier */
/* eslint-disable global-require */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  enabled: true,
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
