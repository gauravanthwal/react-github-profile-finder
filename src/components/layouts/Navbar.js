import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <nav className="bg-primary navbar">
      <h1>
        <i className="fab fa-github"></i> {props.title}
      </h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.PropTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
