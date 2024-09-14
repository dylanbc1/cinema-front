import React, { useState } from 'react';
import axios from 'axios';

const CancelReservation = () => {
  const [reservationId, setReservationId] = useState('');

  const handleCancel = (e) => {
    e.preventDefault();

    // URL del back-end
    axios.delete(`URL_DEL_BACKEND/reservations/${reservationId}`)
      .then(response => {
        alert('Reservación cancelada');
        setReservationId('');
      })
      .catch(error => console.error('Error al cancelar la reservación', error));
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Cancelar Reservación</h2>
      <form onSubmit={handleCancel} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="reservationId" className="form-label">ID de la Reservación</label>
          <input
            type="text"
            id="reservationId"
            className="form-control"
            value={reservationId}
            onChange={(e) => setReservationId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">Cancelar Reservación</button>
      </form>
    </div>
  );
};

export default CancelReservation;
