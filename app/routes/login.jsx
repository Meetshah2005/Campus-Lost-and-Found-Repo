import { createUser, getUser } from "../services/UserHandling.js";
import { useState } from "react";
import { useNavigate } from "react-router";

export const links = () => [
  { rel: "stylesheet", href: "/app/styles/login.css" },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  let navigate = useNavigate();

  const handleData = () => {
    const data = {
      universityEmail: "test@pitt.edu",
      password: "pass",
      name: "Joe",
      contactDetails: "0987654321",
    };
    createUser(data);
  };

  const handleGetUser = async (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
    try {
      const user = await getUser(email);

      if (user) {
        console.log(user);
        if (user.password === password) {
          console.log("Login successful");
          setUser(user);
          setEmail("");
          setPassword("");
          setError(null);
          navigate("/dashboard");
        } else {
          console.log("Login failed");
          setUser(null);
          setPassword("");
          setError("Incorrect password");
        }
      } else {
        console.log("User not found");
        setUser(null);
        setPassword("");
        setError("User not found.");
      }
    } catch (error) {
      console.error("Error during GET request:", error);
      setUser(null);
      setPassword("");
      setError("Error during GET request.");
    }
  };

  return (
    <main className="login-page">
    <div className="wrapper">
      <h1>Login</h1>

      <form onSubmit={handleGetUser}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="bx  bxs-user"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="bx  bxs-lock"></i>
        </div>

        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>

        <button type="submit" className="register-btn" onClick={handleData}>
          Register Test User
        </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </main>
  );
}
