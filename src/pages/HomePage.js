import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/global.css"; // Genel stiller için

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  // Toggle function to open/close sidebar
  const toggleSidebar = () => {
    console.log("Toggle Sidebar Function Triggered"); 
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
     
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="main-container">
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className={`content ${isSidebarOpen ? "expanded" : "collapsed"}`}
        >
          <h1>Ana Sayfa</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
