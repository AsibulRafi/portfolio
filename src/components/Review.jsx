import React from "react";
import Carousel from "react-elastic-carousel";
import person from "../assets/person.png";
const Review = () => {
  const breakPoints = [{ width: 1, itemsToShow: 1 }];
  return (
    <section className="review">
      <div className="review__heading">
        <h2>Testimonials</h2>
        <h4>People I've worked with have said some nice things...</h4>
      </div>
      <Carousel breakPoints={breakPoints}>
        <div className="review__content">
          <img src={person} alt="personImg" />
          <p className="review__text">
            “ He is very hard-working and passionate about his projects. He pays
            great attention to details <br /> and always goes beyond limits to
            finish his projects on time and even before that.
            <br /> He is well-mannered and has good communication skills “
          </p>
          <h3>Evdokia Stoyanova</h3>
          <p>Head of IT, Lydya Financial</p>
        </div>
      </Carousel>
    </section>
  );
};

export default Review;
