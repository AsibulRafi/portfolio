import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <section className="card">
      <div className="card__wrapper">
        <div className="card__content">
          <h2>Start a Project</h2>
          <p>
            Interested in working together? We should
            <br /> queue up a time to chat. I’ll buy the coffee.
          </p>
          <Link to="/contact" className="card__btn">
            Let's Do This🤝
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
