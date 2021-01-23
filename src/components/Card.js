import React from "react";
import "./Card.scss";

function Card({ pic, desc }) {
  return (
    <div className="card">
      <img className="cardImg" src={pic} alt="qweqweq" />
      <h2 className="cardBody">{desc}</h2>
      <h3 className="tagging1">Adventure</h3>
    </div>
  );
}

export default Card;
