/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('public\curve-1.png')",
      },
      borderRadius: {
        extraLarge: '12rem'
      },
      screens: {
        xs: '320px',
        md:'820px'
      },
      maxWidth:{
        screen:'100vw'
      }
    },
  },
  plugins: [],
};
