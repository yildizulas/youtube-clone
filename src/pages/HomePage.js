import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import "../styles/global.css";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle function to open/close sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const videos = Array.from({ length: 10 }, (_, index) => ({
    id: index,
  }));

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
            {videos.map((video) => (
              <VideoCard key={video.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
