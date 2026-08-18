import { LessonCourse, LessonModule } from '../../types';
import { humanBodyModule } from './week1_human_body';
import { week1Module as labSafetyModule } from './week1_anph111';

export { humanBodyModule } from './week1_human_body';
export { week1Module as labSafetyModule } from './week1_anph111';

export const allModules: LessonModule[] = [
  humanBodyModule,
  labSafetyModule
];

export const defaultCourseData: LessonCourse = {
  id: 'course_anph111',
  subjectCode: 'ANPH111',
  title: 'Anatomy and Physiology (ANPH 111)',
  instructor: 'Catherine Baleña-Pascual',
  modules: allModules
};
