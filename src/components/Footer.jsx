import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footmain">
        <h2 className="sunny text-center">sunnyside</h2>
        <ul className="foot offset-md-4">
          <li className="about">About</li>
          <li className="services">Services</li>
          <li className="projects">Projects</li>
        </ul>
      </div>
      <div className="fontmain offset-5">
        <a className="font" href=""> 
          <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
        </a>
        <a className="font"href="">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a className="font"href="">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a className="font"href="">
          <FontAwesomeIcon icon={faPinterest} size="2x" />
        </a>
      </div>

      {/* <FontAwesomeIcon icon="fa-brands fa-square-facebook" /> */}
    </div>
  );
};

export default Footer;
