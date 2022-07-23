module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22223B",
        "primary-200": "#222232",
        secondary: "#F2E9E4",
        "fade-blue": "#4A4E69",
        "helio-gray": "#9A8C98",
        "silver-pink": "#C9ADA7",
      },
    },
  },
  plugins: [],
  variants: {
    extends: {
      display: ["group-hover"],
    },
  },
}
