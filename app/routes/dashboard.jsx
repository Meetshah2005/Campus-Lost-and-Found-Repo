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
        <div className="item">
          <img src="/images/backpack.png" alt="Lost Item" />
          <div className="info">
            <div className="title">Black Backpack</div>
            <div className="location">Hillman Library</div>
            <button className="report-button">Report Found</button>
          </div>
        </div>

        <div className="item">
          <img src="/images/airpods.png" alt="Lost Item" />
          <div className="info">
            <div className="title">AirPods Case</div>
            <div className="location">Cathedral 3rd Floor</div>
            <button className="report-button">Report Found</button>
          </div>
        </div>

        <div className="item">
          <img src="/images/bottle.png" alt="Lost Item" />
          <div className="info">
            <div className="title">Pitt Water Bottle</div>
            <div className="location">Market</div>
            <button className="report-button">Report Found</button>
          </div>
        </div>
        <div className="item">
          <img src="/images/hydroflask.png" alt="Lost Item" />
          <div className="info">
            <div className="title">Blue Hydro Flask</div>
            <div className="location">Benedum</div>
            <button className="report-button">Report Found</button>
          </div>
        </div>

        <div className="item">
          <img src="/images/watch.png" alt="Lost Item" />
          <div className="info">
            <div className="title">Apple Watch Series 7</div>
            <div className="location">Rec Center Locker Room</div>
            <button className="report-button">Report Found</button>
          </div>
        </div>

        <div className="item">
          <img src="/images/keychain.png" alt="Lost Item" />
          <div className="info">
            <div className="title">Pitt Panther Keychain</div>
            <div className="location">William Pitt Union</div>
            <button className="report-button">Report Found</button>
          </div>
        </div>

        <div className="item">
          <img src="/images/calc.png" alt="Lost Item" />
          <div className="info">
            <div className="title">TI-84+ Calculator</div>
            <div className="location">Thackeray Hall 213</div>
            <button className="report-button">Report Found</button>
          </div>
        </div>

        <div className="item">
          <img src="/images/earring.png" alt="Lost Item" />
          <div className="info">
            <div className="title">Golden Earrings</div>
            <div className="location">Cathy Ground Floor Bathroom</div>
            <button className="report-button">Report Found</button>
          </div>
        </div>

      </div>
      <button className="add-button">+</button>
    </>
  );
}
