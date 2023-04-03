/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      blue: "#007AFF",
      bodyColor: "#0E1133",
      white: "#fff",
      lightBrown: "#FBAF5B",
    },
    container: {
      padding: "1rem",
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      center: true,
    },

    extend: {
      backgroundImage: {
        group:
          "url('/src/images/iPhone 12 Pro mockup.png'), url('/src/images/iphone12Back.png')",
        iphone12Back: "url('/src/images/Group 1990.png')",
      },
    },
  },
  plugins: [],
};
