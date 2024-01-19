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
        abc: ["ABC Monument Grotesk", "sans-serif"]
      },
      backgroundImage: {
        "header": "url(/header.jpg)",
        "footer": "url('/footer.jpg')",
        "footer_md": "url('/footer_md.jpg')",
        'gradient-radial': 'radial-gradient(circle, #822676 35%, #bf543b 60%, #d7aa53 90%)',
      },

      colors: {
        primary: "#7B258B",
        secondary: "#FFFFFF",
        third: "#000000",
        fourth: "#333333",
      },
      boxShadow: {
        custom: "0px 4px 4px 0px #0000004D",
      }
    },
  },
  plugins: [],
};
