import React from "react";
import backgroundImage from "../images/desktop/image-header.jpg";
import arrowimg from "../images/desktop/icon-arrow-down.png";

const Navbar = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100vh",
  };

  return (
    <div className="main" style={backgroundStyle}>
      <div className="background">
        <h4>sunnyside</h4>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className="contact">Contact</li>
        </ul>
      </div>
      <div className="arrow">
        <h1 className="nav-content mt-5">WE ARE CREATIVES</h1>
        <img className="down" src={arrowimg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
