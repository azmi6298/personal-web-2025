import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

document.addEventListener('DOMContentLoaded', function () {
	var splide = new Splide('.splide', {
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
