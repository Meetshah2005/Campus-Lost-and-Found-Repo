export default function LostItem({image, title, location, date}){
  return (
    <div className="item">
      <img src={image} alt={title} />
      <div className="info">
        <div className="title">{title}</div>
        <div className="location">Last Known Location: {location}</div>
        <div className="date-lost">Date Lost: {date}</div>
        <button className="report-button">Report Found</button>
      </div>
    </div>
  );
}