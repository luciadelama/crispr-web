import { useState } from "react";
import axios from "axios";
import "./Login.css"

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
        password,
      });

      localStorage.setItem("adminToken", res.data.token);
      window.location.href = "/";
    } catch (err) {
      setError("Wrong password. Please try again.");
    }
  };

  return (
    <div className="login">
        <div className="login-container">
            <h2>Admin Login</h2>

            <form onSubmit={handleLogin}>
                <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    </div>
  );
}