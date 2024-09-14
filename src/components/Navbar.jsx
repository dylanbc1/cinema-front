import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-custom py-3">
      <div className="container d-flex justify-content-center">
        <Link
          to="/"
          className="text-white mx-3 text-uppercase fw-bold text-decoration-none link-hover"
        >
          Inicio
        </Link>
        <Link
          to="/movies"
          className="text-white mx-3 text-uppercase fw-bold text-decoration-none link-hover"
        >
          Películas
        </Link>
        <Link
          to="/reservations"
          className="text-white mx-3 text-uppercase fw-bold text-decoration-none link-hover"
        >
          Reservaciones
        </Link>
        <Link
          to="/cancel"
          className="text-white mx-3 text-uppercase fw-bold text-decoration-none link-hover"
        >
          Cancelar Reservación
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
