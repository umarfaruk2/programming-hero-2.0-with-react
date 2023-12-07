/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "btn_bg": "url('/src/assets/images/btn_bg.png')",
        'custom-gra': 'linear-gradient(90deg, #E855DE 0.01%, #5400EE 100%)',
        'custom-gra2': 'linear-gradient(31deg, #251360 0%, #7A29A3 64.86%, #CE1AEB 100%)',
        'text-color': 'linear-gradient(90deg, #E855DE -26.01%, #5400EE 121.7%)',
        'course_img': "url('/src/assets/images/grid-bg.png')",
      },
      screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'slg': '992px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      
      'llg': '1200px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    },
  },
  plugins: [],
});
