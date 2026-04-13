import { HeaderPhoto } from '@/lib/types';

// TODO: Replace with real Cursor Guatemala event photos
export const headerPhotos: HeaderPhoto[] = [
	{
		src: '/images/events/cursor-event-01.jpg',
		alt: 'Cursor Meetup Antigua Guatemala — comunidad tech',
		row: 1,
		col: 1,
		rowSpan: 2,
		colSpan: 2,
		mobile: { row: 1, col: 1, rowSpan: 2, colSpan: 2 },
	},
	{
		src: '/images/events/cursor-event-02.jpg',
		alt: 'Developers colaborando en Cursor Guatemala',
		row: 1,
		col: 3,
		mobile: { row: 3, col: 1 },
	},
	{
		src: '/images/events/cursor-event-04.jpg',
		alt: 'Cursor Hackathon Guatemala 2026 en UVG',
		row: 1,
		col: 4,
		rowSpan: 2,
		mobileHidden: true,
	},
	{
		src: '/images/events/cursor-event-03.jpg',
		alt: 'Charlas y live coding en Cursor Guatemala',
		row: 2,
		col: 3,
		mobile: { row: 3, col: 2 },
	},
	{
		src: '/images/events/cursor-event-05.jpg',
		alt: 'Equipos construyendo prototipos en el hackathon',
		row: 3,
		col: 1,
		rowSpan: 2,
		mobileHidden: true,
	},
	{
		src: '/images/events/cursor-event-07.jpg',
		alt: 'Cafe Cursor Guatemala — aprendizaje practico de IA',
		row: 3,
		col: 2,
		rowSpan: 2,
		colSpan: 2,
		mobileHidden: true,
	},
	{
		src: '/images/events/cursor-event-06.jpg',
		alt: 'Comunidad Cursor Guatemala reunida',
		row: 3,
		col: 4,
		rowSpan: 2,
		mobile: { row: 4, col: 1, colSpan: 2 },
	},
];
