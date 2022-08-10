import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
// import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  useEffect(() => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const fadeElems = document.querySelectorAll(".has-fade");

    if (open === false) {
      body.classList.remove("noscroll");
      header.classList.remove("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      });
    } else {
      body.classList.add("noscroll");
      header.classList.add("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
      });
    }
  }, [open]);
  return (
    <>
      <header className="header">
        <div className="overlay has-fade"></div>
        <nav>
          <div
            id="btnHamburger"
            className="header__toggle hide-for-desktop"
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header__links hide-for-mobile">
            <Link to="/#projects">Work</Link>
            <Link to="/#about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Blogs</Link>
            <div className="themeToggle">
              <HiMoon />
            </div>
          </div>
          <div className="header__menu has-fade">
            <Link to="/#projects" onClick={() => setOpen(false)}>
              Work
            </Link>
            <Link to="/#about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link to="/" onClick={() => setOpen(false)}>
              Blogs
            </Link>
            <div className="themeToggle" onClick={() => setOpen(false)}>
              <HiMoon />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
