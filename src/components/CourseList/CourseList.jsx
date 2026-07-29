
import { CourseCard } from "../CourseCard/CourseCard";
import "./CourseList.css";

export const CourseList = ({ courses, isFavorite, onToggleFav }) => {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isFav={isFavorite(course.id)}
          onToggleFav={() => onToggleFav(course.id)}
        />
      ))}
    </div>
  );
};
