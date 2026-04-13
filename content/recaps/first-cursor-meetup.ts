import { RecapData } from '@/lib/types';

export const firstCursorMeetupRecap: RecapData = {
	slug: 'first-cursor-meetup',
	title: 'Primer Meetup de Cursor en Guatemala',
	date: 'January 25, 2026',
	summary: [
		'We successfully hosted our very first Cursor Meetup in Guatemala. Alongside co-founder and friend Diego V. Rosales and Eleanor Menchu Melgar, we shared insights on the Fundamentals of AI, how to use Cursor to smooth the development cycle, and practical tips on prompt engineering.',
		'This was just the beginning. The community response was amazing and set the foundation for everything that followed — more meetups, hands-on workshops, and the first AI hackathon in Central America.',
	],
	speakers: [
		{
			name: 'Diego Andrés Cum Chávez',
			topic: 'Fundamentals of AI & Prompt Engineering',
		},
		{
			name: 'Diego V. Rosales',
			topic: 'Using Cursor to optimize the development cycle',
		},
		{
			name: 'Eleanor Menchu Melgar',
			topic: 'Getting started with Cursor',
		},
	],
	highlights: [
		{
			quote: 'This is just the beginning. We\'re already planning more meetups, hands-on workshops, and an upcoming AI hackathon.',
			author: 'Diego Andrés Cum Chávez',
		},
		{
			quote: 'Special thanks to Ben Lang and the Cursor Ambassador community for the support and inspiration.',
		},
	],
	photoCredits: [{ name: 'Cursor Guatemala Community' }],
	photos: [
		{
			src: '/images/events/cursor-event-03.jpg',
			alt: 'First Cursor Meetup Guatemala — speakers presenting',
		},
		{
			src: '/images/events/cursor-event-01.jpg',
			alt: 'Community at the first Cursor Meetup in Guatemala',
		},
	],
};
