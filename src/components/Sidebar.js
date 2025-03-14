import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <ul>
        <li>
          <button className="sidebar-btn" onClick={() => navigate("/")}>
            <i className="bi bi-house-door"></i> Ana Sayfa
          </button>
        </li>
        <li>
          <button className="sidebar-btn" onClick={() => navigate("/empty")}>
            <i className="bi bi-collection-play"></i> Shorts
          </button>
        </li>
        <li>
          <button className="sidebar-btn" onClick={() => navigate("/empty")}>
            <i className="bi bi-people"></i> Abonelikler
          </button>
        </li>
        <li>
          <button className="sidebar-btn" onClick={() => navigate("/empty")}>
            <i className="bi bi-music-note"></i> YouTube Music
          </button>
        </li>
        <hr />
        <li>
          <button className="sidebar-btn" onClick={() => navigate("/empty")}>
            <i className="bi bi-clock-history"></i> Geçmiş
          </button>
        </li>
        <li>
          <button className="sidebar-btn" onClick={() => navigate("/empty")}>
            <i className="bi bi-folder"></i> Oynatma Listeleri
          </button>
        </li>
        <li>
          <button className="sidebar-btn" onClick={() => navigate("/empty")}>
            <i className="bi bi-play-circle"></i> Videolarınız
          </button>
        </li>
        <li>
          <button className="sidebar-btn" onClick={() => navigate("/empty")}>
            <i className="bi bi-clock"></i> Daha Sonra İzle
          </button>
        </li>
        <li>
          <button className="sidebar-btn" onClick={() => navigate("/empty")}>
            <i className="bi bi-hand-thumbs-up"></i> Beğendiğim Videolar
          </button>
        </li>
        <li>
          <button className="sidebar-btn" onClick={() => navigate("/empty")}>
            <i className="bi bi-scissors"></i> Klipleriniz
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
