import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/global.css";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle function to open/close sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className={`home-page ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="main-container">
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className={`content ${isSidebarOpen ? "expanded" : "collapsed"}`}
          style={{
            marginLeft: isSidebarOpen ? "300px" : "70px",
          }}
        >
          <h1>Ana Sayfa</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
