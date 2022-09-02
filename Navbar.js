import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.addEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="netflix_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      ></img>
      <img
        className="nav_avatar"
        src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
        alt="User Logo"
      ></img>
    </div>
  );
};

export default Navbar;
