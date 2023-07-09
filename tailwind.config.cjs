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
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },

    },
  },
  plugins: [],
};
