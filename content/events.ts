import { CursorEvent } from '@/lib/types';

export const events: CursorEvent[] = [
	{
		id: 'cursor-meetup-antigua',
		title: 'Cursor Meetup Antigua',
		titleLocal: 'Cursor Meetup Antigua Guatemala',
		date: '2026-03-22',
		displayDate: 'March 22, 2026',
		location: 'Antigua Guatemala',
		recapPath: '/recaps/cursor-meetup-antigua',
		thumbnail: '/images/events/cursor-event-01.jpg',
		galleryImages: ['/images/events/cursor-event-02.jpg', '/images/events/cursor-event-03.jpg'],
		status: 'past',
		host: {
			name: 'El Cubo Center',
			logo: '/images/partners/el-cubo-center.svg',
			url: 'https://elcubocenter.com',
		},
	},
	{
		id: 'cursor-hackathon-guatemala',
		title: 'Cursor Hackathon Guatemala',
		titleLocal: 'Cursor Hackathon Guatemala 2026',
		date: '2026-03-07',
		displayDate: 'March 7, 2026',
		attendees: 140,
		location: 'Universidad del Valle de Guatemala, Ciudad de Guatemala',
		recapPath: '/recaps/cursor-hackathon-guatemala',
		thumbnail: '/images/events/cursor-event-04.jpg',
		galleryImages: ['/images/events/cursor-event-05.jpg', '/images/events/cursor-event-06.jpg'],
		status: 'past',
		host: {
			name: 'Universidad del Valle de Guatemala',
			logo: '/images/partners/uvg.svg',
			url: 'https://www.uvg.edu.gt',
		},
	},
	{
		id: 'cafe-cursor-guatemala',
		title: 'Cafe Cursor Guatemala',
		titleLocal: 'Cafe Cursor Guatemala',
		date: '2026-02-15',
		displayDate: 'February 15, 2026',
		location: 'Ciudad de Guatemala, Guatemala',
		recapPath: '/recaps/cafe-cursor-guatemala',
		thumbnail: '/images/events/cursor-event-07.jpg',
		galleryImages: ['/images/events/cursor-event-02.jpg'],
		status: 'past',
	},
	{
		id: 'first-cursor-meetup-guatemala',
		title: 'First Cursor Meetup Guatemala',
		titleLocal: 'Primer Meetup de Cursor en Guatemala',
		date: '2026-01-25',
		displayDate: 'January 25, 2026',
		location: 'Ciudad de Guatemala, Guatemala',
		recapPath: '/recaps/first-cursor-meetup',
		thumbnail: '/images/events/cursor-event-03.jpg',
		galleryImages: ['/images/events/cursor-event-01.jpg'],
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
