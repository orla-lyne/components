
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, User, Layers } from "lucide-react";
import { FavoriteButton } from "../../components/FavoriteButton/FavoriteButton";
import { NotFound } from "../../components/NotFound/NotFound";
import "./CourseDetails.css";

export const CourseDetails = ({ courses, isFavorite, onToggleFav }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <NotFound />;

  return (
    <div className="details-page">
      <button className="back-btn" onClick={() => navigate("/")}><ArrowLeft size={16} /> <span>Back</span></button>
      <div className="details-card">
  
        <div className="details-content">
          <h2>{course.title}</h2>
          <p className="details-desc">{course.description}</p>
          <p className="details-meta"><User size={16} /> <b>Instructor:</b> {course.instructor}</p>
          <p className="details-meta"><Clock size={16} /> <b>Duration:</b> {course.duration}</p>
          <p className="details-meta"><Layers size={16} /> <b>Difficulty:</b> {course.difficulty}</p>
          <div className="details-actions"><FavoriteButton isFav={isFavorite(course.id)} onClick={() => onToggleFav(course.id)} /></div>
        </div>
      </div>
    </div>
  );
};
