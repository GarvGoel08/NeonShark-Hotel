import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const authToken = localStorage.getItem("auth-token");
  const [isAuthToken, setIsAuthToken] = useState(authToken);
  const navigate = useNavigate();
  const WorkWithUsHandler = () => {
    if (authToken) {
      localStorage.removeItem("auth-token");
      setIsAuthToken(false);
    } else {
      navigate("/SignUp");
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbarDiv">
        <div className="HamburgerDiv">
          <img src="./Images/Logo.svg" className="logoImg" onClick={() => (window.location.href = '/')} alt="Logo" />
          <button className="hamburger" onClick={toggleMenu}>
            <div className={`line ${menuOpen ? "open" : ""}`} />
            <div className={`line ${menuOpen ? "open" : ""}`} />
            <div className={`line ${menuOpen ? "open" : ""}`} />
          </button>
        </div>
        <div className={`NavLinksDiv ${menuOpen ? "showMenu" : ""}`}>
          <div className="NavLink">Nav Link</div>
          <div className="NavLink">Nav Link</div>
          <div className="NavLink">Nav Link</div>
          <div className="NavLink">Nav Link</div>
          <button onClick={WorkWithUsHandler} className="WorkWithUsBtn">
            <div className="WorkWithUsText">
              {isAuthToken ? "Logout" : "Work with us"}
            </div>
            <img
              loading="lazy"
              src="./Images/Arrow.svg"
              className="Arrow"
              alt="Arrow"
            />
          </button>
        </div>
      </div>
    </>
  );
}
