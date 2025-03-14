# YouTube Clone Project

This project is a YouTube Clone built using **React, Bootstrap, and React Router** to create a responsive video platform interface. It also uses **Lorem Picsum API** and JavaScript's **random functions** to generate random video data, ensuring a unique experience for the user every time the page is refreshed.

## Features

- **Responsive Navbar & Sidebar:**
  - The **Navbar** remains fixed at the top and includes a search bar, voice search, notification, and profile icons.
  - The **Sidebar** is collapsible and maintains its open/closed state using `useState` and `localStorage`, preventing unnecessary re-rendering.

- **Dynamic Video Listing:**
  - Video thumbnails are fetched from **Lorem Picsum API** to display a new set of videos upon refresh.
  - **Video durations** are randomly generated between `00:01` and `99:59` using `Math.random()`.
  - **Titles** and **channel names** are randomly selected from predefined arrays.
  - **Channel profile pictures** are also randomly generated using Lorem Picsum, displayed in a `50x50` circular format.
  - **View counts and upload years** are randomly assigned between `10M - 200B views` and `1 - 15 years ago` respectively.

- **Optimized UI for Readability:**
  - Video titles are limited to **two lines**, and overflow is handled with `...`.
  - A **three-dot menu button** is included for future functionality (e.g., adding to playlist, sharing, etc.).

- **Search Bar with Auto-Clear Feature:**
  - Users can type in the search bar and press **Enter** or click the search button.
  - The input field automatically clears upon searching using `useState`.

- **Custom YouTube Clone Branding:**
  - The **logo in the Navbar** was modified using Bootstrap Icons (`bi-youtube`), styled with a red background and a white play button inside.
  - The **browser tab title and favicon** were updated in `public/index.html`, changing from "React App" to "YouTube Clone" while setting a YouTube-style favicon.

- **Navigation Functionality:**
  - The **"Home" button** refreshes the page and loads a new set of videos.
  - Other Sidebar buttons navigate to an **EmptyPage.js** component that displays a playful message: _"Oops! How did you find this page? You weren’t supposed to see this!"_

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yildizulas/youtube-clone.git
   cd youtube-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Future Enhancements

- Implement a **"Save to Playlist"** feature.
- Add real API integration for videos using **YouTube Data API**.
- Enhance the **three-dot menu** with options like "Save for Later" and "Share".

## Built With

- **React** - JavaScript library for UI development
- **Bootstrap** - Responsive design framework
- **React Router** - Client-side navigation
- **Lorem Picsum API** - Placeholder images for thumbnails and avatars
- **LocalStorage** - Persisting Sidebar state

## Author

Developed by **Ulaş Yıldız**.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). For more details, check the [React documentation](https://reactjs.org/).
