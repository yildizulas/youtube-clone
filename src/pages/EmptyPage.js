import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/global.css";
import "../styles/EmptyPage.css";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    localStorage.getItem("isSidebarOpen") === "true"
  );

  // Toggle sidebar state without causing a full re-render
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      localStorage.setItem("isSidebarOpen", !prev);
      return !prev;
    });
  };

  return (
    <div
      className={`home-page ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="main-container">
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className="content-empty-page"
          style={{
            marginLeft: isSidebarOpen ? "300px" : "70px",
          }}
        >
          <div className="video-grid">
            Oops! Bu sayfayı nasıl buldunuz? Burası halen
            yapım aşamasında, burayı görmemeniz gerekiyordu!
            🤫
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
