import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <div>
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
        <span to="" className={
          window.location.pathname === "" ? "nav-link active" : "nav-link"
        }>
        Placeholder
        </span>
    </li>
    <li className="nav-item">
      <Link
        to="/Login"
        className={
          window.location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
      >
        Log In/Sign Up
      </Link>
    </li>




  </ul>
  </div>
);

export default NavTabs;
