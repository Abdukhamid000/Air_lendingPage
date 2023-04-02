tailwind.config = {
  theme: {
    colors: {
      blue: "#007AFF",
      white: "#fff",
    },
    container: {
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
  },
};
