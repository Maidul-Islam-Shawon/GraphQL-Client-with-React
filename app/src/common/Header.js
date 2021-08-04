import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Sample GraphQL and Apollo Client
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sessions">
              Session
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/speakers">
              Speaker
            </NavLink>
          </li>
        </ul>
        <span className="navbar-text">Demo App</span>
      </div>
    </nav>
  );
};

export default Header;
