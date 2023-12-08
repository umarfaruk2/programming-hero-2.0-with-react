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
        'course_img': "url('/src/assets/images/grid-bg.png')",
        'mobile_bg': "url('/src/assets/images/globe.png')",   

        'custom-gra': 'linear-gradient(90deg, #E855DE 0.01%, #5400EE 100%)',
        'custom-gra2': 'linear-gradient(31deg, #251360 0%, #7A29A3 64.86%, #CE1AEB 100%)',
        'text-color': 'linear-gradient(90deg, #E855DE -26.01%, #5400EE 121.7%)',
        'phitron_title': 'linear-gradient(70deg, #4B75F1 9.27%, #3065FF 92.91%)',
        'phitron_btn': 'linear-gradient(90deg, #6892FF 0.01%, #1555B5 100%)',
        'phitron_card': 'linear-gradient(33deg, #081848 0%, #081848 0%, #081848 0.01%, #2E5CDF 100%)',
        'mobile_title': 'linear-gradient(97.64deg, #D8AAFF 15.56%, #ACB5FF 92.85%)',
        'mobile_status': 'linear-gradient(149deg, #DC02CE 0%, #7C3FF2 70.83%, #5C53FE 100%)',

        'card_body_1': 'linear-gradient(161deg, #371CE2 0%, rgba(37, 6, 77, 0.00) 100%)',
        'card_batch_1': 'linear-gradient(90deg, #E855DE 0.01%, #5400EE 100%)',

        'card_body_2': 'linear-gradient(161deg, #1CE2BF 0%, rgba(6, 68, 77, 0.00) 100%)',
        'card_batch_2': 'linear-gradient(90deg, #1B8DC6 -26.01%, #00925B 121.7%)',

        'card_body_3': 'linear-gradient(161deg, #E21CE2 0%, rgba(77, 6, 55, 0.00) 100%)',
        'card_batch_3': 'linear-gradient(90deg, #661BC6 -26.01%, #924AEF 121.7%)',

        'card_body_4': 'linear-gradient(161deg, #E2871C 0%, rgba(77, 65, 6, 0.00) 100%)',
        'card_batch_4': 'linear-gradient(90deg, #E87055 -26.01%, #EE007E 121.7%)'
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
