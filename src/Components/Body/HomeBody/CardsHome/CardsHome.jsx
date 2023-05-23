import "./CardsHome.css";

export default function CardsHome({ img, text }) {
  return (
    <div className="cardsHome">
      <p>{text}</p>
      <img src={img} alt="" />
    </div>
  );
}
