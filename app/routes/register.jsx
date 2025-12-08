import { createUser, getUser } from "../services/UserHandling.js";
import { useState } from "react";
import { useNavigate, Link } from "react-router";

export const links = () => [
  { rel: "stylesheet", href: "/app/styles/register.css" },
];

export default function Register() {
    const [error, setError] = useState(null);


    const [data, setData] = useState({
        universityEmail: "",
        password: "",
        name: "",
        contactDetails: "",
    });

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            //Potentially some requirement handling here? (special characters, length)
            const submission = await createUser(data)
            console.log("Success! Created user data");
            navigate("/login"); //Redirect to login page on success
        }catch (error){
            console.error("Error during POST request: ", error);
        }
    };

    const handleUpdates = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };
    
    return (
        <main className="login-page">
        <div className="wrapper">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="University Email"
              required
              name="universityEmail"
              value={data.universityEmail}
              onChange={handleUpdates}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={data.password}
              onChange={handleUpdates}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Full Name"
              required
              name="name"
              value={data.name}
              onChange={handleUpdates}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Phone"
              required
              name="contactDetails"
              value={data.contactDetails}
              onChange={handleUpdates}
            />
          </div>

          <button type="submit" className="btn">
            Register
          </button>

          <div className = "login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </main>
  );
}