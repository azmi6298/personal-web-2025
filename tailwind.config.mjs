import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#e2e8f0',
				'primary-inverted': '#181418',
				brand: '#8c46fa',
			},
			fontFamily: {
				sans: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
