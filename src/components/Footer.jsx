import React from "react";
import insta from "../assets/instagram.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import upwork from "../assets/upwork.svg";
import twitter from "../assets/twitter.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <h2>
          Living, learning, & leveling up one day
          <br /> at a time.
        </h2>
        <div className="footer__social">
          <a
            href="https://github.com/AsibulRafi"
            className="footer__social-single"
          >
            <img src={github} alt="socialIcon" />
          </a>
          <a
            href="https://www.instagram.com/asibul._islam/"
            className="footer__social-single"
          >
            <img src={insta} alt="socialIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/asibul-islam-rafio-95bb2821b/"
            className="footer__social-single"
          >
            <img src={linkedin} alt="socialIcon" />
          </a>
          <a
            href="https://twitter.com/asibul_rafi"
            className="footer__social-single"
          >
            <img src={twitter} alt="socialIcon" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~013bc382434825086e"
            className="footer__social-single"
          >
            <img src={upwork} alt="socialIcon" />
          </a>
        </div>
        <div className="footer__copyright">
          <img
            src="https://img.icons8.com/fluency-systems-regular/25/FFFFFF/creative-commons-all-rights-reserved.png"
            alt="copyright"
          />
          <p>All right Reserved to asibul_rafi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
