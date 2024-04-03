/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#ff930f',
          90: '#fdaa45',
        },
        blue: {
          50: '#2c56aa',
          90: '#4c88ff',
        },
        black: {
          50: '#2a2d34',
          90: '#2a2d34',
        },
        beige: {
          50: '#fffaf3',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
      },
      backgroundImage: {
        'bg-hero': "url('/hero.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      boxShadow: {
        'xl': '0 6px 32px rgba(0, 0, 0, .1)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transform: {
        'arrow-animation': 'translate3d(-110%, 0px, 0px)',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};