import type { PageServerLoad } from './$types';
import courses from "$lib/server/courses_data";
import { type ICourses} from "$lib/server/courses_data";


export const load: PageServerLoad  = ({ params }) => {
  let course = params.course;
	return getCourseByValue(course);
};

function getCourseByValue(value: string | undefined ): ICourses | undefined {
  return courses.find(course => course.value === value);
}

