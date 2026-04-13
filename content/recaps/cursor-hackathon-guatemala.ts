import { RecapData } from '@/lib/types';

export const cursorHackathonGuatemalaRecap: RecapData = {
	slug: 'cursor-hackathon-guatemala',
	title: 'Cursor Hackathon Guatemala 2026',
	date: 'March 7, 2026',
	attendees: 140,
	summary: [
		'More than 140 builders, developers, and AI enthusiasts came together at Universidad del Valle de Guatemala to experiment, collaborate, and build prototypes in just 7 hours.',
		'Teams of 2-4 people from all profiles — programmers, designers, marketers, content creators, entrepreneurs, and curious minds — participated. No programming knowledge was required, as AI tools allowed anyone with an idea to materialize it.',
		'The energy of the tech community in Guatemala was incredible. This was the largest AI hackathon in Central America, and it was just the beginning.',
	],
	host: {
		name: 'Universidad del Valle de Guatemala',
		logo: '/images/partners/uvg.svg',
		url: 'https://www.uvg.edu.gt',
	},
	highlights: [
		{
			quote: 'The energy of the tech community in Guatemala was incredible — this is just the beginning.',
			author: 'Diego Andrés Cum Chávez',
		},
		{
			quote: 'More than 140 builders came together to create, experiment, and build prototypes in just a few hours.',
		},
	],
	photoCredits: [{ name: 'Cursor Guatemala Community' }],
	photos: [
		{
			src: '/images/events/cursor-event-04.jpg',
			alt: 'Cursor Hackathon Guatemala — participants building prototypes',
		},
		{
			src: '/images/events/cursor-event-05.jpg',
			alt: 'Hackathon teams collaborating at UVG',
		},
		{
			src: '/images/events/cursor-event-06.jpg',
			alt: 'Cursor Hackathon Guatemala presentations',
		},
	],
};
