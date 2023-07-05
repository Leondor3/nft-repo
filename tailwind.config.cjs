/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],  
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px',
          '2xl': '1344px',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #4776e6 0%, #9405c6 100%)',
        "hero-pattern": "linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0, 0.9) 80%)",
      },
      blur: {
        full: '194px',
      },
    },
  },
  plugins: [],
};
