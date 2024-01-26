/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        nova: "'Palatino Nova', serif",
        univers: "'Univers Extrablack',serif",
        abc: ["ABC Monument Grotesk", "sans-serif"],
        futura: ["Futura", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"]
      },
      backgroundImage: {
        // "header": "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(/header.webp)",
        "header": "url(/header.webp)",
        "footer": "url('/footer.webp')",
        'gradient-radial': 'radial-gradient(circle, #822676 35%, #bf543b 60%, #d7aa53 90%)',
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        third: "#000000",
        fourth: "#333333",
        dialog: {
          back: "#fff",
          input: "rgb(203 213 225);",
          text: "#000000"
        }
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '30px',
        'h4': {
          'sm': '12px',
          'md': '35px',
        },
        'h5': '20px',
        'h6': '16px',
      },
      boxShadow: {
        custom: "0px 4px 4px 0px #0000004D",
      }
    },
  },
  plugins: [],
};
