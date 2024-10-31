import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Screens/landingPage.js';
import CasePage from './Screens/CasePage.js'; // Import your CasePage component
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/case" element={<CasePage />} /> {/* Define route for CasePage */}
      </Routes>
    </Router>
  );
}

export default App;
