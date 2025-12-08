import LostItem from "../components/LostItem";
import { useLoaderData } from "react-router";

export const links = () => [
  { rel: "stylesheet", href: "/app/styles/dashboard.css" },
];
export const loader = async () => {
  const itemData = await fetch("http://localhost:3001/items");
  return itemData.json();
};

export default function Dashboard() {
  const items = useLoaderData();

  return (
    <>
      <nav className="navbar">
        <div className="logo">FoundIt</div>
        <input type="text" className="search-bar" placeholder="Search items" />
        <div className="nav-links">
          <button className="nav-btn">Messages</button>
          <button className="nav-btn">Profile</button>
        </div>
        <div className="profile-picture">
          <img src="/images/profile.png" />
        </div>
      </nav>

      <div className="feed">
        {items.map((item) => (
          <LostItem
            id = {item.id}{...item}
          />
        ))}
      </div>

      <button className="add-button">+</button>
    </>
  );
}
