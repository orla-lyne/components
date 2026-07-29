import { coursesData } from "../data/courses";

export const fetchCoursesFromApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(coursesData), 400);
  });
};
