import { useState } from "react";

export const useSearch = (courses) => {
  const [search, setSearch] = useState("");
  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );
  return { search, setSearch, filteredCourses };
};
