import React from "react";
import milkbottles from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import cone from "../images/desktop/image-gallery-cone.jpg";
import sugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg";

const Footimg = () => {
  return (
    <div className="footimg">
      <img className="chow" src={milkbottles} alt="" />
      <img className="chow" src={orange} alt="" />
      <img className="chow" src={cone} alt="" />
      <img className="chow" src={sugarcubes} alt="" />
    </div>
  );
};

export default Footimg;
