import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  const [searchInput, setSearchInput] = useState("");
  console.log(
    "Navbar received toggleSidebar prop:",
    typeof toggleSidebar
  ); // Debugging log

  return (
    <nav
      className={`navbar ${isSidebarOpen ? "expanded" : "collapsed"}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
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
          <i className="bi bi-youtube youtube-icon"></i>
          <span className="logo-text">YouTube Clone</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="navbar-search-container">
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Ara"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSearchInput("");
            }}
          />
          <button
            className="search-button"
            onClick={() => setSearchInput("")}
          >
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
