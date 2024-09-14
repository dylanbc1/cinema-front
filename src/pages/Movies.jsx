import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // URL del back-end
    axios.get('URL_DEL_BACKEND/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error al obtener películas', error));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center my-4">Películas disponibles</h2>
      {movies ? (
        <p className="text-center text-muted">No hay películas disponibles.</p>
      ) : (
        <ul className="list-group">
          {movies.map(movie => (
            <li key={movie.id} className="list-group-item">
              <h5>{movie.title}</h5>
              <p>Director: {movie.director}</p>
              <p>Duración: {movie.duration} min</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
