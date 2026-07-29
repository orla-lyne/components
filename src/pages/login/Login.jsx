import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { GraduationCap } from "lucide-react";
import "./Login.css";

export const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUser({ name: name.trim() });
    }
  };

  return (
    <div className="login-screen">
      <form onSubmit={handleSubmit} className="login-card">
        <div className="login-icon-header"><GraduationCap size={44} /></div>
        <h3>Portal Student Sign In</h3>
        <p>Please enter your name to access your courses.</p>
        <input
          type="text"
          placeholder="Student Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="login-field"
          required
        />
        <button type="submit" className="login-submit-btn">Enter Workspace</button>
      </form>
    </div>
  );
};
