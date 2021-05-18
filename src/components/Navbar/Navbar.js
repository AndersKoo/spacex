import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import spacex from "./spacex.png";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">
          <img className="logo" src={spacex} alt="spacex" />
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
}

export default Navbar;
