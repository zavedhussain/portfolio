/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#083344",
        secondary: "#ef4444",
      },
    },
  },
  plugins: [],
};
