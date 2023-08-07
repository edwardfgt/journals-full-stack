module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        journals: "#1f2937",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["dark"],
  },
};
