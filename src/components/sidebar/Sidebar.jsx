import  { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Home, LayoutDashboard, Users, BookOpen, LogOut } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import "./Sidebar.css";

export const Sidebar = () => {
  const { setUser } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h4 className="sidebar-heading">Navigation</h4>
      
      <NavLink to="/home" className="sidebar-link"><Home size={18} /> <span>Home</span></NavLink>
      <NavLink to="/" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}><LayoutDashboard size={18} /> <span>Dashboard</span></NavLink>
      <NavLink to="/users" className="sidebar-link"><Users size={18} /> <span>Users</span></NavLink>
      <NavLink to="/courses" className="sidebar-link"><BookOpen size={18} /> <span>Courses</span></NavLink>
      
      <hr className="sidebar-divider" />
      
      <div className="sidebar-link logout" onClick={() => setUser(null)}>
        <LogOut size={18} /> <span>Logout</span>
      </div>
    </div>
  );
};
