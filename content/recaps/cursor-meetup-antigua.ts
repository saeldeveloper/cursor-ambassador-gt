import { RecapData } from '@/lib/types';

export const cursorMeetupAntiguaRecap: RecapData = {
	slug: 'cursor-meetup-antigua',
	title: 'Cursor Meetup Antigua Guatemala',
	date: 'March 22, 2026',
	summary: [
		'What\'s happening with AI + Devs in Guatemala feels different. Cursor Meetup Antigua was proof of that.',
		'People building, experimenting, and learning together in real time. A Cursor Field Engineer joined to share insights about the future of software engineering in the AI era, along with talks, live coding, and networking.',
	],
	host: {
		name: 'El Cubo Center',
		logo: '/images/partners/el-cubo-center.svg',
		url: 'https://elcubocenter.com',
	},
	speakers: [
		{
			name: 'Jet Semrick',
			topic: 'The future of software engineering in the AI era',
		},
		{
			name: 'Diego V. Rosales',
			topic: 'Live coding with Cursor',
		},
		{
			name: 'Juan Pablo Mora Argueta',
			topic: 'Building with AI tools',
		},
	],
	highlights: [
		{
			quote: 'What\'s happening with AI + Devs in Guatemala… feels different.',
			author: 'Diego Andrés Cum Chávez',
		},
	],
	photoCredits: [{ name: 'Cursor Guatemala Community' }],
	photos: [
		{
			src: '/images/events/cursor-event-01.jpg',
			alt: 'Cursor Meetup Antigua — community gathering at El Cubo Center',
		},
		{
			src: '/images/events/cursor-event-02.jpg',
			alt: 'Developers collaborating at Cursor Meetup Antigua',
		},
		{
			src: '/images/events/cursor-event-03.jpg',
			alt: 'Talks and live coding at Cursor Meetup Antigua',
		},
	],
};
