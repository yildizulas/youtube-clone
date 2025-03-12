import React from "react";
import "../styles/Navbar.css";

function Navbar({ toggleSidebar }) {
  console.log(
    "Navbar received toggleSidebar prop:",
    typeof toggleSidebar
  ); // Debugging log

  return (
    <nav className="navbar">
      <button
        className="menu-btn"
        onClick={() => {
          console.log("Sidebar toggle button clicked"); // Debugging log
          if (toggleSidebar) {
            toggleSidebar();
          } else {
            console.error(
              "toggleSidebar function is undefined!"
            );
          }
        }}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* YouTube Logo */}
      <div className="navbar-logo">
        <i
          className="bi bi-youtube"
          style={{ color: "red", fontSize: "2rem" }}
        ></i>
        <span className="logo-text">YouTube Clone</span>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        className="navbar-search form-control"
        placeholder="Search"
      />

      {/* Icons */}
      <div className="navbar-icons">
        <i className="bi bi-bell"></i>
        <i className="bi bi-person-circle"></i>
      </div>
    </nav>
  );
}

export default Navbar;
