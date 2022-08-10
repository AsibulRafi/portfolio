import React from "react";
import About from "../components/About";
import Card from "../components/Card";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Review from "../components/Review";

const Home = () => {
  return (
    <>
      <Hero />
      <hr className="home__line" />
      <Projects />
      <About />
      <hr className="home__line" />
      <Contact />
      <hr className="home__line" />
      <Review />
      <Card />
    </>
  );
};

export default Home;
