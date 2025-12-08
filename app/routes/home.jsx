import { Button } from "../components/ui/button";
import { NavLink } from "react-router";

export const links = () => [
  { rel: "stylesheet", href: "/app/styles/home.css" },
];

export function meta({}) {
  return [{ title: "Campus Lost and Found" }];
}

export default function Home() {
  return (
    <main className="home-page">
      <div className="navbar">
        <div className="navbar-container">
          <img src="/images/logo.png" className="logo"></img>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Testimonies</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <h1>FIND YOUR MISSING ITEM</h1>
        <p>
          Lost an item? Sign up for FoundIT today to help locate your missing
          item on University of Pittsburgh campus.{" "}
        </p>
        <NavLink to="/login">
          <Button>Start</Button>
        </NavLink>
      </div>
    </main>
  );
}
