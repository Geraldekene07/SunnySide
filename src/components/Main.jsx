import React from "react";
import Navbar from "./Navbar";
import egg from "../images/desktop/image-transform.jpg";
import cup from "../images/desktop/image-stand-out.jpg";
import background1 from "../images/desktop/image-graphic-design.jpg";
import background2 from "../images/desktop/image-photography.jpg";
import Testimonials from "./Testimonials";
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="transform d-flex">
        <div className="brand">
          <h1 className="head">Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="">
            {" "}
            <p className="learn mt-5">LEARN MORE.</p>
          </a>
        </div>
        <div className="egg">
          <img src={egg} alt="" width={631} />
        </div>
      </div>
      <div className="transform d-flex">
        <div className="egg">
          <img src={cup} alt="" width={631} />
        </div>

        <div className="brand">
          <h1 className="head">Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="">
            {" "}
            <p className="learn mt-5">LEARN MORE.</p>
          </a>
        </div>
      </div>
      <div className="d-flex">
        <div
          className="back"
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            minHeight: "90vh",
            width: 630,
          }}
        >
          <div className="same">
            <h2 className="graphic"> Graphic Design</h2>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div
          className="back"
          style={{
            backgroundImage: `url(${background2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            minHeight: "90vh",
            width: 630,
          }}
        >
          <div className="same">
            <h2 className="photo">Photography</h2>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Main;
