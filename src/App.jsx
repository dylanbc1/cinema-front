import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Movies from './pages/Movies';
import Reservations from './pages/Reservations';
import CancelReservation from './pages/CancelReservation';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/cancel" element={<CancelReservation />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
