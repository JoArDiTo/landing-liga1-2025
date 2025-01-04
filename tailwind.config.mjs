/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#e82739'
			},
			backgroundImage: {
        "footer-found": "url(/footer_bg.webp)",
      },
			fontFamily: {
				'primary': ['"Avenir Next Heavy"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
