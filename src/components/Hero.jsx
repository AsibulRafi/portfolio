import React from "react";
import heroImg from "../assets/hero-devices.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__heading">
        <h4 className="hero__subHeading">Build , Grow , Pivot</h4>
        <hr className="hero__line" />
        <h2 className="hero__mainHeading">
          NEXT LEVEL <br />
          WEBISTE DESIGN & DEVELOPMENT
        </h2>
        <p className="hero__text">
          Grow a Human Centered Online Business.55% of web users spend less than
          15 seconds on a web page <br />
          before losing focus. I Build websites with great UI, excellent user
          experience, and responsive designs.
        </p>
      </div>
      <div className="hero__img">
        <img src={heroImg} alt="heroImg" />
      </div>
    </section>
  );
};

export default Hero;
