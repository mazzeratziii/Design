// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import ParticipantsMain from './pages/Participants/ParticipantsMain';
import Application from './pages/Participants/Application';
import Dashboard from './pages/Participants/Dashboard';
import MentorsMain from './pages/Mentors/MentorsMain';
import MentorRegistrationPage from './pages/Mentors/MentorsRegistration';
import JuryMain from './pages/Jury/JuryMain';
import VolunteersMain from './pages/Volunteers/VolunteersMain';
import NewsMain from './pages/News/NewsMain';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/participants" element={<ParticipantsMain />} />
        <Route path="/participants/application" element={<Application />} />
        <Route path="/participants/dashboard" element={<Dashboard />} />
        <Route path="/mentors" element={<MentorsMain />} />
        <Route path="/mentors/registration" element={<MentorRegistrationPage />} />
        <Route path="/mentors/login" element={<LoginPage />} />
        <Route path="/jury" element={<JuryMain />} />
        <Route path="/volunteers" element={<VolunteersMain />} />
        <Route path="/news" element={<NewsMain />} />
      </Routes>
    </Router>
  );
}

export default App;
