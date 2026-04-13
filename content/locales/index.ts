import es from './es.json';
import en from './en.json';

export const localeBundles = {
	es,
	en,
} as const;

export type LocaleBundleKey = keyof typeof localeBundles;
