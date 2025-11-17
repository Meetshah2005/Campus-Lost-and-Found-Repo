export const links = () => [
  { rel: "stylesheet", href: "/app/styles/dashboard.css" },
];

export default function Dashboard() {
  return (
    <>
      <nav class="navbar">
        <div class="logo">Campus Lost & Found</div>
        <input type="text" class="search-bar" placeholder="Search items" />
        <div class="nav-links">
          <button class="nav-btn">Messages</button>
          <button class="nav-btn">Profile</button>
        </div>
        <div class="profile-picture">
          <img src="/images/profile.png" />
        </div>
      </nav>

      <div class="feed">
        <div class="item">
          <img src="/images/image.png" alt="Lost Item" />
          <div class="info">
            <div class="title">Black Backpack</div>
            <div class="location">Hillman Library</div>
            <button class="report-button">Report Found</button>
          </div>
        </div>

        <div class="item">
          <img src="/images/background2.jpg" alt="Lost Item" />
          <div class="info">
            <div class="title">AirPods Case</div>
            <div class="location">Cathedral 3rd Floor</div>
            <button class="report-button">Report Found</button>
          </div>
        </div>

        <div class="item">
          <img src="/images/background2.jpg" alt="Lost Item" />
          <div class="info">
            <div class="title">Pitt ID</div>
            <div class="location">Market</div>
            <button class="report-button">Report Found</button>
          </div>
        </div>
        <div class="item">
          <img src="/images/background2.jpg" alt="Lost Item" />
          <div class="info">
            <div class="title">Blue Hydro Flask</div>
            <div class="location">Benedum</div>
            <button class="report-button">Report Found</button>
          </div>
        </div>

        <div class="item">
          <img src="/images/background2.jpg" alt="Lost Item" />
          <div class="info">
            <div class="title">Apple Watch Series 7</div>
            <div class="location">Rec Center Locker Room</div>
            <button class="report-button">Report Found</button>
          </div>
        </div>

        <div class="item">
          <img src="/images/background2.jpg" alt="Lost Item" />
          <div class="info">
            <div class="title">Set of Keys with Panther Keychain</div>
            <div class="location">William Pitt Union</div>
            <button class="report-button">Report Found</button>
          </div>
        </div>

        <div class="item">
          <img src="/images/background2.jpg" alt="Lost Item" />
          <div class="info">
            <div class="title">TI-84+ Calculator</div>
            <div class="location">Thackeray Hall 213</div>
            <button class="report-button">Report Found</button>
          </div>
        </div>

        <div class="item">
          <img src="/images/background2.jpg" alt="Lost Item" />
          <div class="info">
            <div class="title">Golden Earrings</div>
            <div class="location">Cathy Ground Floor Bathroom</div>
            <button class="report-button">Report Found</button>
          </div>
        </div>

      </div>
      <button class="add-button">+</button>
    </>
  );
}
