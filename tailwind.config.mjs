import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#e2e8f0',
				'primary-inverted': '#181418',
				brand: '#6d28d9',
			},
			fontFamily: {
				sans: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
