import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import "../styles/global.css";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    localStorage.getItem("isSidebarOpen") === "true"
  );

  // Initialize videosRef only once without a conditional useRef call
  const videosRef = useRef(null);

  if (!videosRef.current) {
    videosRef.current = Array.from(
      { length: 50 },
      (_, index) => ({
        id: index,
      })
    );
  }

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
          className="content"
          style={{
            marginLeft: isSidebarOpen ? "300px" : "70px",
          }}
        >
          <div className="video-grid">
            {videosRef.current.map((video) => (
              <VideoCard key={video.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
