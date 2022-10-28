import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <nav>
      <div>
        <NavLink to="/">Socialink</NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/users"
        >
          <i className="fa-solid fa-people-roof"></i>
        </NavLink>
      </div>
    </nav>
  );
}
