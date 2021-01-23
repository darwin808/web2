import React from "react";
import "./Card2.scss";

function Card2({ pic, desc }) {
  return (
    <div className="Card2">
      <img className="card2Img" src={pic} alt="qweqweq" />
      <h2 className="card2desc">{desc}</h2>
      <h3 className="tagging2">Luxury</h3>
    </div>
  );
}

export default Card2;
