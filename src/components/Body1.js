import React from "react";
import "./Body1.scss";
import vid1 from "../assets/v1.mp4";

export const Body1 = () => {
  return (
    <div className="body1">
      <video src={vid1} muted loop autoPlay className="bgvid"></video>
      <h1 className="body1header">ADVENTURE AWAITS</h1>
      <h2 className="body1Subheader">What are you wating for?</h2>
      <div className="btnContainer">
        <button className="btnBody1">GET STARTED</button>
        <button className="trailerbtn">Watch Trailer</button>
      </div>
    </div>
  );
};
