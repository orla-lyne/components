import  { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { GraduationCap } from "lucide-react";
import "./Login.css";

export const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) setUser({ name: name.trim() });
  };

  return (
    <div className="login-screen">
      <form onSubmit={handleSubmit} className="login-card">
        <div className="login-header"><GraduationCap size={40} /></div>
        <h3>Student Sign In</h3>
        <p>Enter your name to browse available courses.</p>
        <input
          type="text"
          placeholder="Your Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="login-field"
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};
