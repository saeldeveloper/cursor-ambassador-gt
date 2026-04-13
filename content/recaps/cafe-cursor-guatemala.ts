import { RecapData } from '@/lib/types';

export const cafeCursorGuatemalaRecap: RecapData = {
	slug: 'cafe-cursor-guatemala',
	title: 'Cafe Cursor Guatemala',
	date: 'February 15, 2026',
	summary: [
		'We hosted our first Cafe Cursor in Guatemala, and the energy was incredible. Together with Diego Rosales and the Cursor community, we explored an Advent of Prompt challenge designed to help people learn, experiment, and share ideas around AI.',
		'This event reinforced something important: accessible, practical AI learning brings people together. Our youngest participant was just 14 years old — proof that programming (vibe coding) has no age.',
	],
	highlights: [
		{
			quote: '12 prompt challenges shared and solved collaboratively by the community.',
		},
		{
			quote: 'Our youngest participant was just 14 years old — proof that programming has no age.',
			author: 'Diego Andrés Cum Chávez',
		},
		{
			quote: 'A local startup shared how Cursor is part of their everyday dev environment.',
		},
		{
			quote: 'Hands-on testing of new Cursor features like debug mode, browser, and design tools.',
		},
	],
	photoCredits: [{ name: 'Cursor Guatemala Community' }],
	photos: [
		{
			src: '/images/events/cursor-event-07.jpg',
			alt: 'Cafe Cursor Guatemala — community learning together',
		},
		{
			src: '/images/events/cursor-event-02.jpg',
			alt: 'Advent of Prompt challenge at Cafe Cursor Guatemala',
		},
	],
};
