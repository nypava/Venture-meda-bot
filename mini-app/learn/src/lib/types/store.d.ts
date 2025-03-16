export interface LessonContent {
    dir: string;
    time: string;
  }

export interface Lessons {
    [lessonTitle: string]: {
      [topic: string]: LessonContent;
    };
  }

export interface ICourses {
    title: string;
    time: string;
    value: string;
    about: string;
    cover_image: string;
    lessons: Lessons
}
