import  { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LayoutDashboard, Award, BookOpen } from "lucide-react";
import "./Dashboard.css";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard-welcome">
      <div className="welcome-banner">
        <LayoutDashboard size={32} />
        <h2>Welcome to your Workspace, {user?.name}!</h2>
        <p>Select Courses from the side navigation menu to view your learning tracks.</p>
      </div>

      <div className="dashboard-stats-row">
        <div className="stat-box"><BookOpen size={24} /> <h4>Active Tracks</h4> <p>Ready</p></div>
        <div className="stat-box"><Award size={24} /> <h4>Certificates</h4> <p>0 Earned</p></div>
      </div>
    </div>
  );
};
