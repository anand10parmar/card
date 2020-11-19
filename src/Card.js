import React from "react";
import "./styles.css";

export default function Card({ cardData }) {
  const sorting = () => {
    cardData.sort((a, b) => a.time - b.time);
  };

  return (
    <div className="App">
      {cardData &&
        cardData.map((card) => (
          <div className="card">
            <div className="card__image-container">
              <img src={card.src} alt="asd" />
            </div>
            <div>
              <p>Here's the Title of an Awesome Course</p>
              <p>{card.time + " Min"}</p>
              <p>Free</p>
            </div>
          </div>
        ))}
    </div>
  );
}
