const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        customFont:["poppins","sans"],
        
        poppins: ["Poppins", "sans"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
    },
  },
  plugins: [
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    // tailwindcss: {},
    // autoprefixer: {},
  ],
});
