import { HeaderPhoto } from '@/lib/types';

// TODO: Replace with real Cursor Guatemala event photos
export const headerPhotos: HeaderPhoto[] = [
	{
		src: '/events/cursor-event-31.jpg',
		alt: 'Cursor Meetup Antigua Guatemala — comunidad tech',
		row: 1,
		col: 1,
		rowSpan: 2,
		colSpan: 2,
		mobile: { row: 1, col: 1, rowSpan: 2, colSpan: 2 },
	},
	{
		src: '/events/cursor-event-32.jpg',
		alt: 'Developers colaborando en Cursor Guatemala',
		row: 1,
		col: 3,
		mobile: { row: 3, col: 1 },
	},
	{
		src: '/events/cursor-event-33.jpg',
		alt: 'Cursor Hackathon Guatemala 2026 en UVG',
		row: 1,
		col: 4,
		rowSpan: 2,
		mobileHidden: true,
	},
	{
		src: '/events/cursor-event-34.jpg',
		alt: 'Charlas y live coding en Cursor Guatemala',
		row: 2,
		col: 3,
		mobile: { row: 3, col: 2 },
	},
	{
		src: '/events/cursor-event-35.jpg',
		alt: 'Equipos construyendo prototipos en el hackathon',
		row: 3,
		col: 1,
		rowSpan: 2,
		mobileHidden: true,
	},
	{
		src: '/events/cursor-event-36.jpg',
		alt: 'Cafe Cursor Guatemala — aprendizaje practico de IA',
		row: 3,
		col: 2,
		rowSpan: 2,
		colSpan: 2,
		mobileHidden: true,
	},
	{
		src: '/events/cursor-event-37.jpg',
		alt: 'Comunidad Cursor Guatemala reunida',
		row: 3,
		col: 4,
		rowSpan: 2,
		mobile: { row: 4, col: 1, colSpan: 2 },
	},
];
