import React from "react";
import "../styles/Navbar.css";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  console.log(
    "Navbar received toggleSidebar prop:",
    typeof toggleSidebar
  ); // Debugging log

  return (
    <nav
      className={`navbar ${isSidebarOpen ? "expanded" : "collapsed"}`}
    >
      <div className="navbar-left">
        <button
          className="menu-btn"
          onClick={() => {
            console.log("Sidebar toggle button clicked"); // Debugging log
            toggleSidebar
              ? toggleSidebar()
              : console.error(
                  "toggleSidebar function is undefined!"
                );
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
          <span className="logo-text"
            style={{
              marginLeft: isSidebarOpen ? "1rem" : "0.5rem",
            }}
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
