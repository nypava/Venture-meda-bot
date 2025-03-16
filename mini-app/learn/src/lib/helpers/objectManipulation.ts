
import type { FormSection } from "../../routes/(page)/register/data"
import type { ICourses, LessonContent, Lessons} from "$lib/types/store";

interface LessonDetails {
    dir: string;
    time: string;
}

interface CourseLessons {
    [title: string]: {
        [chater_title: string]: LessonDetails;
    };
}

interface TransformedLesson {
    title: string;
    chapter_title: string;
    dir: string;
    time: string;
}


interface FlattenedLesson extends LessonData {
  title: string;
  section: string;
}

interface LessonData {
  dir: string;
  time: string;
}

export function createTitleObject(form: FormSection): Record<string, string> {
    return Object.values(form).flatMap(section =>
        section.map(item => [item.value, ""])
    ).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

export function createTitleValueObject(form: FormSection): Record<string, string> {
    return Object.values(form).flatMap(section =>
        section.map(item => [item.value, item.title])
    ).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

export function countRequiredFields(form: FormSection): number {
    return Object.values(form)
        .flatMap(section => section)
        .filter(field => field.required)
        .length;
}

export function countNoneEmptyValues(data: Record<string, string>): number {
    return Object.values(data).filter(value => value !== "").length;
}

export function transformLessonDetailsToObject(lessons: CourseLessons): { [chapterTitle: string]: TransformedLesson } {
    let result: { [chapterTitle: string]: TransformedLesson } = {};

    for (const [title, subLessons] of Object.entries(lessons)) {
        for (const [chapterTitle, details] of Object.entries(subLessons)) {
            result[chapterTitle] = {
                chapter_title: chapterTitle,  
                title: title,                
                dir: details.dir,
                time: details.time
            };
        }
    }
    return result;
}


export function findNextLesson(lessons: Lessons, currentTitle: string) {
  if (!lessons || typeof lessons !== 'object' || !currentTitle) {
    return null;
  }

  try {
    const flatLessons: FlattenedLesson[] = [];
    
    Object.keys(lessons).forEach(section => {
      if (lessons[section] && typeof lessons[section] === 'object') {
        Object.entries(lessons[section]).forEach(([title, data]) => {
          flatLessons.push({
            title,
            section,
            ...data
          });
        });
      }
    });

    const currentIndex = flatLessons.findIndex(lesson => lesson.title === currentTitle);
    
    if (currentIndex !== -1 && currentIndex < flatLessons.length - 1) {
      const nextLesson = flatLessons[currentIndex + 1];
      return {
        chapter_title: nextLesson.title,
        title: nextLesson.section,
        dir: nextLesson.dir,
        time: nextLesson.time
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error in findNextLesson:', error);
    return null;
  }
}
