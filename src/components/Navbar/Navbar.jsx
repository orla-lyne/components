import  { useContext } from "react";
import { GraduationCap, UserCheck } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

export const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-brand"><GraduationCap size={28} /><h2 className="navbar-title">Student Portal</h2></div>
      {user && <div className="navbar-user"><UserCheck size={18} /><span>Welcome, {user.name}</span></div>}
    </nav>
  );
};
