import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import form from './data';

export const load: PageLoad = () => {
	return form;
};
