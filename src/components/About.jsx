import React from "react";
import terminal from "../assets/Console.png";
import ui from "../assets/ui.png";
import { Frontend, UI } from "../data";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about__wrapper">
          <div className="about__heading">
            <h4>WHO AM I ?</h4>
            <h2>ABOUT ME</h2>
            <hr />
          </div>
          <div className="about__content">
            <h3>👋 Hi ! I am Rafi.</h3>
            <p>
              I'm a Frontend Developer with expertise of 3 years of professional
              work experience.
              <br /> I Strive to create original, Highly Enhance Websites and
              impactful user experiences.
              <br /> I’m quietly confident, naturally curious, and prepetually
              working on improving my chops one <br /> design problem at a time.
            </p>
          </div>
        </div>
      </section>
      <section className="about__card">
        <div className="about__card-single">
          <div className="about__card-heading">
            <div className="about__card-heading-img">
              <img src={terminal} alt="terminal" />
            </div>
            <h2>Front-End Developer</h2>
          </div>
          <p>
            Decide web page design and structure. Develop features to enhance
            the users’ experience. Striking a balance between functional and
            aesthetic design.
            <br /> Sure the web design is smartphone-capable. Build reusable
            code for future use . Make sure web pages are optimized for best
            speed and scalability.
            <br /> Employ a diverse selection of markup languages to design web
            pages.Keep the brand consist throughout the whole design
          </p>
          <div className="about__card-box">
            {Frontend.map((item) => (
              <div className="about__card-box-single" id={item.id}>
                <h2>{item.name}</h2>
                <img src={item.logo} alt="cardImg" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about__card">
        <div className="about__card-single">
          <div className="about__card-heading">
            <div className="about__card-heading-img">
              <img src={ui} alt="terminal" />
            </div>
            <h2>UI / UX Designer</h2>
          </div>
          <p>
            Simple content structure, clean design patterns, and thoughtful
            interactions. Turn potential visitors to customers <br />
            by delivering responsive and accessible user interface design
          </p>
          <div className="about__card-box">
            {UI.map((item) => (
              <div className="about__card-box-single" id={item.id}>
                <h2>{item.name}</h2>
                <img src={item.logo} alt="cardImg" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
