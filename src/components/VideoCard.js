import React from "react";
import "../styles/VideoCard.css";

function VideoCard() {
  // Taking random photos
  const imageUrl = `https://picsum.photos/400/225?random=${Math.random()}`;

  // Random time generation (0:01 to 99:59)
  const randomMinutes = Math.floor(Math.random() * 100);
  const randomSeconds = Math.floor(Math.random() * 60);
  const videoDuration = `${randomMinutes}:${randomSeconds < 10 ? "0" : ""}${randomSeconds}`;

  // Random header generation
  const titles = [
    "Yeni Teknoloji Harikası!",
    "İnanılmaz Keşif!",
    "Şok Edici Gerçekler!",
    "Tarihin En Büyük Olayları",
    "İlginç Bilgiler",
    "Bilim ve Gelecek",
  ];
  const videoTitle =
    titles[Math.floor(Math.random() * titles.length)];

  // Random channel name generation
  const channels = [
    "TechWorld",
    "BilimLab",
    "KeşifTV",
    "EğitimNet",
    "Gezegenler",
  ];
  const channelName =
    channels[Math.floor(Math.random() * channels.length)];

  // Random display and year information
  const views =
    Math.random() > 0.5
      ? `${Math.floor(Math.random() * 90) + 10}Mn`
      : `${Math.floor(Math.random() * 200) + 10}B`;
  const yearsAgo = Math.floor(Math.random() * 15) + 1;

  return (
    <div className="video-box">
      <div className="video-card">
        {/* Video Thumbnail */}
        <div className="thumbnail-container">
          <img
            src={imageUrl}
            alt="Video Thumbnail"
            className="thumbnail"
          />
          <span className="duration">{videoDuration}</span>
        </div>

        <div className="video-info">
          <div className="menu-icon">⋮</div>
          <h3 className="title">
            {videoTitle.length > 40
              ? videoTitle.substring(0, 37) + "..."
              : videoTitle}
          </h3>
          <p className="channel">{channelName}</p>
          <p className="details">
            {views} görüntüleme • {yearsAgo} yıl önce
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
