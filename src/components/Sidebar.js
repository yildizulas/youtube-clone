import React from "react";
import "../styles/Sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <div
      className={`sidebar ${isOpen ? "open" : "closed"}`}
    >
      <ul>
        <li>
          <i className="bi bi-house-door"></i> Ana Sayfa
        </li>
        <li>
          <i className="bi bi-collection-play"></i> Shorts
        </li>
        <li>
          <i className="bi bi-people"></i> Abonelikler
        </li>
        <li>
          <i className="bi bi-music-note"></i> YouTube Music
        </li>
        <hr />
        <li>
          <i className="bi bi-clock-history"></i> Geçmiş
        </li>
        <li>
          <i className="bi bi-folder"></i> Oynatma Listeleri
        </li>
        <li>
          <i className="bi bi-play-circle"></i> Videolarınız
        </li>
        <li>
          <i className="bi bi-clock"></i> Daha Sonra İzle
        </li>
        <li>
          <i className="bi bi-hand-thumbs-up"></i>{" "}
          Beğendiğim Videolar
        </li>
        <li>
          <i className="bi bi-scissors"></i> Klipleriniz
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
