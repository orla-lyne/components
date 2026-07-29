import  { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useCourses } from "./hooks/useCourses";
import { useFavorites } from "./hooks/useFavorites";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { CourseDetails } from "./pages/CourseDetails/CourseDetails";
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

export default function App() {
  const { user } = useContext(AuthContext);
  const { courses, loading, error } = useCourses();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!user) return <Login />;

  return (
    <div className="app-container">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="app-content">
          {loading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!loading && !error && (
            <Routes>
              <Route path="/" element={<Dashboard courses={courses} isFavorite={isFavorite} onToggleFav={toggleFavorite} />} />
              <Route path="/course/:id" element={<CourseDetails courses={courses} isFavorite={isFavorite} onToggleFav={toggleFavorite} />} />
            </Routes>
          )}
        </main>
      </div>
    </div>
  );
}
