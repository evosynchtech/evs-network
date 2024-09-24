/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      desktop: "880px",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        josefin: "'Josefin Sans', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [],
};
