
import { Heart } from "lucide-react";
import "./FavoriteButton.css";

export const FavoriteButton = ({ isFav, onClick }) => {
  return (
    <button onClick={onClick} className={`fav-button ${isFav ? "active" : ""}`}>
      <Heart size={16} fill={isFav ? "#dc2626" : "none"} />
      <span>{isFav ? "Favorited" : "Favorite"}</span>
    </button>
  );
};
