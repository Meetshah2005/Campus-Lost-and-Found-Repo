import { Button } from "../components/ui/button";
import { NavLink } from "react-router";

export const links = () => [
  { rel: "stylesheet", href: "/app/styles/home.css" },
];

export function meta({}) {
  return [
    { title: "Campus Lost and Found" }
  ];
}

export default function Home() {
  return (
    <main className="home-page">
      <h1 className="text-4xl text-center font-bold">Campus Lost and Found</h1>
      <p className="text-center">Welcome to the Campus Lost and Found system. Please login to continue.</p>
      <NavLink to="/login">
        <Button>Login</Button>
      </NavLink>
    </main>
  );
}
