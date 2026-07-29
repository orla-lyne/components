
import { useNavigate } from "react-router-dom";
import { User, Layers, Users } from "lucide-react";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import "./CourseCard.css";

export const CourseCard = ({ course, isFav, onToggleFav }) => {
  const navigate = useNavigate();

  return (
    <div className="course-card">
      
      <div className="course-card-body">
        <h3 className="course-card-title" onClick={() => navigate(`/course/${course.id}`)}>{course.title}</h3>
        <p className="course-info-row"><User size={14} /> <span>{course.instructor}</span></p>
        <p className="course-info-row"><Layers size={14} /> <span>{course.difficulty}</span></p>
        <p className="course-info-row"><Users size={14} /> <span>{course.students} Students</span></p>
        <div className="course-card-actions"><FavoriteButton isFav={isFav} onClick={onToggleFav} /></div>
      </div>
    </div>
  );
};
