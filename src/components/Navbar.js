import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Section - Logo */}
      <a href="/" className="navbar-logo">
        <i
          className="bi bi-youtube"
          style={{ color: "red", fontSize: "2rem" }}
        ></i>
        <span className="logo-text">YouTube Clone</span>
      </a>

      {/* Center Section - Search Bar */}
      <input
        type="text"
        className="navbar-search form-control"
        placeholder="Search"
      />

      {/* Right Section - Icons */}
      <div className="navbar-icons">
        <i className="bi bi-bell"></i>{" "}
        {/* Notification Icon */}
        <i className="bi bi-person-circle"></i>{" "}
        {/* User Icon */}
      </div>
    </nav>
  );
}

export default Navbar;
