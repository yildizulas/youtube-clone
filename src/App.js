import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "../src/pages/HomePage.js";
import EmptyPage from "../src/pages/EmptyPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/empty" element={<EmptyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
