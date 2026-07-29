import { useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((favId) => favId !== id) : [...current, id]
    );
  };

  const isFavorite = (id) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite };
};
