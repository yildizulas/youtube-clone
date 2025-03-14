import React from "react";
import "../styles/VideoCard.css";

function VideoCard() {
  // Randomly fetching a video thumbnail
  const imageUrl = `https://picsum.photos/400/225?random=${Math.random()}`;

  // Randomly generating a channel avatar
  const channelAvatar = `https://picsum.photos/50/50?random=${Math.random()}`;

  // Randomly generating video duration (0:01 - 99:59)
  const randomMinutes = Math.floor(Math.random() * 100);
  const randomSeconds = Math.floor(Math.random() * 60);
  const videoDuration = `${randomMinutes}:${randomSeconds < 10 ? "0" : ""}${randomSeconds}`;

  // Randomly selecting a video title
  const titles = [
    "New Technology Wonder!",
    "Incredible Discovery!",
    "Shocking Facts!",
    "The Greatest Events in History",
    "Interesting Facts",
    "Science and Future",
    "Depths of Space!",
    "How Will AI Change the Future?",
    "The Most Mysterious Places on Earth!",
    "Historical Discoveries and Inventions!",
    "The Newest Scientific Research!",
    "Unknown Facts About the Human Brain!",
    "10 Facts About Dinosaurs!",
    "How Will Cities of the Future Look?",
    "The Strangest Natural Phenomena!",
    "Is There Life in Space?",
    "The Future of Robots!",
    "The Biggest Misconceptions in the World!",
    "How Will the Universe End?",
    "Sci-Fi Technologies That Became Real!",
  ];
  const videoTitle =
    titles[Math.floor(Math.random() * titles.length)];

  // Randomly selecting a channel name
  const channels = [
    "TechWorld",
    "BilimLab",
    "KeşifTV",
    "EğitimNet",
    "Gezegenler",
    "Uzay Keşifleri",
    "Gelecek Bilim",
    "Teknoloji Günlüğü",
    "Doğa ve Bilim",
    "Astronomi Akademisi",
    "Yeni Çağ Bilimi",
    "Evrenin Gizemleri",
    "Büyük Keşifler",
    "İlginç Olaylar",
    "Tarihin Derinlikleri",
    "Yüksek Teknoloji",
    "Mühendislik Dünyası",
    "Kuantum Bilimi",
    "Fenomen Bilim",
    "Zeka ve Teknoloji",
  ];
  const channelName =
    channels[Math.floor(Math.random() * channels.length)];

  // Randomly generating view count and years ago data
  const views =
    Math.random() > 0.5
      ? `${Math.floor(Math.random() * 90) + 10}Mn`
      : `${Math.floor(Math.random() * 200) + 10}B`;
  const yearsAgo = Math.floor(Math.random() * 15) + 1;

  return (
    <div className="video-container">
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

          {/* Video Info Box */}
          <div className="video-info-box">
            <img
              src={channelAvatar}
              alt="Channel Avatar"
              className="channel-avatar"
            />
            <div className="video-info">
              <h3 className="title">
                {videoTitle.length > 40
                  ? videoTitle.substring(0, 37) + "..."
                  : videoTitle}
              </h3>
              <p className="channel">{channelName}</p>
              <p className="details">
                {views} views • {yearsAgo} years ago
              </p>
            </div>
            <div className="menu-icon">⋮</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
