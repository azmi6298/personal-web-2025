import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

document.addEventListener('astro:page-load', () => {
	var el = document.querySelector('.splide');
	if (!el) return;

	var splide = new Splide(el, {
		type: 'loop',
		perPage: 4,
		arrows: false,
		pagination: false,
		breakpoints: {
			1024: {
				perPage: 4,
			},
			640: {
				perPage: 2,
			},
		},
	});
	splide.mount({ AutoScroll });
});
