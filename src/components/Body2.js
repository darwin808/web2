import React from "react";
import "./Body2.scss";
import pic from "../assets/p1.jpg";
import pic2 from "../assets/p2.jpg";
import pic3 from "../assets/p3.jpg";
import pic4 from "../assets/p4.jpg";
import pic5 from "../assets/p5.jpg";

import Card from "./Card";
import Card2 from "./Card2";

const Body2 = () => {
  return (
    <div className="body2">
      <h1 className="boy2header">Check out this epic beaches</h1>
      <div className="topcard">
        <div className="card1">
          <Card
            pic={pic}
            desc="Explore the hidden waterfall deep inside the Amazon Jungle"
          />
        </div>

        <div className="card2">
          <Card
            pic={pic2}
            desc="Travel through the Islands of Bali in a Private Cruise"
          />
        </div>
      </div>
      <div className="lowercard">
        <Card2
          pic={pic3}
          desc="Set Sail in the Atlnatic Ocean Visiting Uncharted Waters"
        />
        <Card2
          pic={pic4}
          desc="Experience Football on Top of the Himalayan Mountains"
        />

        <Card2 pic={pic5} desc="Ride through the Saharic Dessert with Camels" />
      </div>
    </div>
  );
};

export default Body2;
