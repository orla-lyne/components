import { useState, useEffect } from "react";
import { coursesData } from "../data/courses";

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCourses(coursesData);
    setLoading(false);
  }, []);

  return { courses, loading, error };
};
