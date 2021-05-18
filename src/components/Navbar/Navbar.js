import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import spacex from "./spacex.png";

function Navbar() {
  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">
        <img className="logo" src={spacex} alt="spacex" />
      </h1>
      <ul className="nav-menu">
        <Link className="nav-links underline" to="/" a href="/">
          Falcon 9
        </Link>

        <Link className="nav-links underline" to="/products">
          Falcon heavy
        </Link>
        <Link className="nav-links underline" to="/about">
          Dragon
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
