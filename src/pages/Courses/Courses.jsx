
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { CourseList } from "../../components/CourseList/CourseList";
import { useSearch } from "../../hooks/useSearch";
import "./Courses.css";

export const Courses = ({ courses, isFavorite, onToggleFav }) => {
  const { search, setSearch, filteredCourses } = useSearch(courses);

  return (
    <div className="courses-view">
      <SearchBar value={search} onChange={setSearch} />
      <CourseList courses={filteredCourses} isFavorite={isFavorite} onToggleFav={onToggleFav} />
    </div>
  );
};
