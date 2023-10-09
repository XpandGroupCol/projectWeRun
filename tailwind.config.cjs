/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				PalatinoNova: "'Palatino Nova', serif",
				UniversExtrablack: "'Univers Extrablack',serif",
				
			},
			backgroundImage: {
				'header-image': "url('/imagen1.webp')",
				'footer': "url('/footer.webp')"

				
			  },
			  
			  colors: {
				primary: '#CFFF5E',
				secondary: '#FFFFFF',
				third: '#000000',
				fourth: '#333333'
			  },
			  boxShadow: {
				'custom': '0px 4px 4px 0px #0000004D'
			  }, screens: {
				xs: '450px',
				xxs:'320px'
			}

		},
	},
	plugins: [],
}
