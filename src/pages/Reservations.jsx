import React, { useState } from 'react';
import axios from 'axios';

const Reservations = () => {
  const [customerName, setCustomerName] = useState('');
  const [seats, setSeats] = useState(1);

  const handleReservation = (e) => {
    e.preventDefault();
    const reservationData = { customerName, seats };

    // Aquí iría la URL del back-end
    axios.post('URL_DEL_BACKEND/reservations', reservationData)
      .then(response => {
        alert('Reservación exitosa');
        setCustomerName('');
        setSeats(1);
      })
      .catch(error => console.error('Error al hacer la reservación', error));
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Hacer una Reservación</h2>
      <form onSubmit={handleReservation} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="customerName" className="form-label">Nombre del Cliente</label>
          <input
            type="text"
            id="customerName"
            className="form-control"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="seats" className="form-label">Asientos Reservados</label>
          <input
            type="number"
            id="seats"
            className="form-control"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            min="1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Reservar</button>
      </form>
    </div>
  );
};

export default Reservations;
