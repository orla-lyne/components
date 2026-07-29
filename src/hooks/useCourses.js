import { useState, useEffect } from "react";
import { fetchCoursesFromApi } from "../services/api";

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCoursesFromApi().then((data) => {
      setCourses(data);
      setLoading(false);
    });
  }, []);

  return { courses, loading, error };
};
