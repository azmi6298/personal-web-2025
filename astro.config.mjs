// @ts-check

import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
	site: 'https://azmi-dev.netlify.app/',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		icon(),
	],
});
