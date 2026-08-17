export const workExpYears = new Date().getFullYear() - 2019;

export type Position = {
	title: string;
	link: string | null;
	description: string;
	startDate: string;
	endDate: string | null;
};

export const positions: Position[] = [
	{
		title: 'Sequis Innovation Lab',
		link: 'https://sequis.co.id/',
		description: 'Frontend Developer (Next.js)',
		startDate: '2023-05',
		endDate: null,
	},
	{
		title: 'Ukirama',
		link: 'https://ukirama.com/',
		description: 'Full-stack Web Developer (RoR) - ERP Software',
		startDate: '2019-09',
		endDate: '2023-04',
	},
	{
		title: 'RuangUMKM',
		link: 'https://pekanraya.ruangumkm.id/',
		description: 'Freelance Frontend Developer (Nuxt.js) - Marketplace Project',
		startDate: '2021-10',
		endDate: '2021-12',
	},
	{
		title: 'Gank Global',
		link: 'https://ganknow.com',
		description: 'Freelance Frontend Developer (Nuxt.js) - Gaming Gig Platform',
		startDate: '2021-07',
		endDate: '2021-08',
	},
	{
		title: '@infiniteclass.id',
		link: null,
		description: 'Coding Mentor - Programming Fundamentals with Javascript',
		startDate: '2021-02',
		endDate: '2021-05',
	},
	{
		title: 'cataloq.co',
		link: null,
		description:
			'Freelance Backend Developer (Express.js) - Marketplace Project',
		startDate: '2020-08',
		endDate: '2021-03',
	},
	{
		title: 'Aristi Jasadata',
		link: null,
		description: 'Android Developer Intern - Banking Project',
		startDate: '2018-07',
		endDate: '2018-08',
	},
];
