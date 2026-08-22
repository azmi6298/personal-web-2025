import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				paper: '#f0ede8',
				'paper-dark': '#18140f',
				surface: '#e7e2da',
				'surface-dark': '#221c15',
				ink: '#1c1a17',
				'ink-dark': '#f2ede5',
				'ink-muted': '#5b5348',
				'ink-muted-dark': '#a89f92',
				route: '#fc4c02',
				brand: '#fc4c02',
				'route-ink': '#fbf3ec',
				line: '#d7d0c5',
				'line-dark': '#3a3225',
			},
			fontFamily: {
				sans: ['Bricolage Grotesque Variable', ...defaultTheme.fontFamily.sans],
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
				code: ['Source Code Pro Variable', ...defaultTheme.fontFamily.mono],
				sporty: ['Racing Sans One', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
