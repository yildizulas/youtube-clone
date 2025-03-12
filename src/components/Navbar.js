import React from "react";
import "../styles/Navbar.css";

function Navbar({ toggleSidebar }) {
  console.log(
    "Navbar received toggleSidebar prop:",
    typeof toggleSidebar
  ); // Debugging log

  return (
    <nav className="navbar">
      <div className="navbar-left">
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
            style={{ color: "red", fontSize: "3rem" }}
          ></i>
          <span
            className="logo-text"
            style={{ marginLeft: "1rem" }}
          >
            YouTube Clone
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="navbar-search-container">
        <div className="navbar-search">
          <input type="text" placeholder="Ara" />
          <button className="search-button">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <button className="voice-search-button">
          <i className="bi bi-mic"></i>
        </button>
      </div>

      {/* Icons */}
      <div className="navbar-icons">
        <i className="bi bi-bell"></i>
        <i className="bi bi-person-circle"></i>
      </div>
    </nav>
  );
}

export default Navbar;
