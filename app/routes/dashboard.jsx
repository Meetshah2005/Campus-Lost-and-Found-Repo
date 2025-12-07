import LostItem from "../components/LostItem";
export const links = () => [
  { rel: "stylesheet", href: "/app/styles/dashboard.css" },
];

export default function Dashboard() {
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
        <LostItem
          image="/images/backpack.png"
          title="Black Backpack"
          location="Hillman Library"
          date="12/21/2025"
        />
        <LostItem
          image="/images/airpods.png"
          title="AirPods Case"
          location="Cathedral 3rd Floor"
          date="12/18/2025"
        />
        <LostItem
          image="/images/bottle.png"
          title="Pitt Water Bottle"
          location="Market"
          date="12/15/2025"
        />
        <LostItem
          image="/images/hydroflask.png"
          title="Blue Hydro Flask"
          location="Benedum"
          date="12/11/2025"
        />
        <LostItem
          image="/images/watch.png"
          title="Apple Watch Series 7"
          location="Rec Center Locker Room"
          date="12/20/2025"
        />
        <LostItem
          image="/images/keychain.png"
          title="Pitt Panther Keychain"
          location="William Pitt Union"
          date="12/19/2025"
        />
        <LostItem
          image="/images/calc.png"
          title="TI-84+ Calculator"
          location="Thackeray Hall 213"
          date="12/16/2025"
        />
        <LostItem
          image="/images/earring.png"
          title="Golden Earrings"
          location="Cathy Ground Floor Bathroom"
          date="12/14/2025"
        />
      </div>

      <button className="add-button">+</button>
    </>
  );
}
