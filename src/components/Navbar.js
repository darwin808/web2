import React, { useState, useEffect } from "react";
import "./Navbar.scss";

function useWindow() {
  const [size, setsize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleresize = () => {
      setsize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleresize);
  }, []);
  return size;
}

export const Navbar = () => {
  const [width, height] = useWindow();
  const [mobile, setmobile] = useState(false);
  const [navbar, setnavabr] = useState(false);
  const [wedth, setwedth] = useState();

  const changecolor = () => {
    window.scrollY >= 800 ? setnavabr(true) : setnavabr(false);
    setmobile(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changecolor);
  });

  const changewidth = () => {
    console.log(window.innerWidth);
    setwedth(window.innerWidth);
  };

  window.addEventListener("resize", changewidth);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="navheader">
        <h1 className="navtitle">TRVL</h1>
      </div>

      {width < 600 ? (
        <div>
          <i
            onClick={() => {
              setmobile(!mobile);
            }}
            className={mobile ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}
          />

          <ul
            className="navlinks2"
            style={{ display: `${mobile ? "flex" : "none"}` }}>
            <li className="navitems">Home</li>
            <li className="navitems">Services</li>
            <li className="navitems">Products</li>
            <button className="btn-inner" id="btn">
              SIGN UP
            </button>
          </ul>
        </div>
      ) : (
        <ul className="navlinks">
          <li className="navitems1">Home</li>
          <li className="navitems1">Services</li>
          <li className="navitems1">Products</li>
          <button className="btn" id="btn">
            SIGN UP
          </button>
        </ul>
      )}
    </div>
  );
};
