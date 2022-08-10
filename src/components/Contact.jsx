import React from "react";
import { Link } from "react-router-dom";
import topic from "../assets/topic.png";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__heading">
        <h4>Have a Project in Mind !</h4>
        <h2>Contact</h2>
      </div>
      <p>
        I'm seeking out opportunities to collaborate with companies / agencies /
        individuals, not just work for them. I want to <br /> bring my
        collective design experience to the table where we can work together to
        solve real business-problems in a way <br />
        that optimizes all of our respective experience and knowledge.
        <br /> I want to avoid subjective pissing-matches, and favor open-minded
        collaborators where egos are out of the equation.
        <br /> If that all sounds about right, then lets for sure chat about how
        we can work together.
      </p>
      <Link to="/contact" className="contact__btn">
        <p>Start a Conversation</p>
        <img src={topic} alt="message" />
      </Link>
    </section>
  );
};

export default Contact;
