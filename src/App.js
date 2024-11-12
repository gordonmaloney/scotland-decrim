import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CampaignTopLevel from './Pages/Campaign/CampaignTopLevel';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/act/:campaignId" element={<CampaignTopLevel />} />
      </Routes>
    </Router>
  );
}

export default App;
