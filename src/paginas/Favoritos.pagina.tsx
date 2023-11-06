import React, { useState } from 'react';
import GrillaPersonajes from '../componentes/personajes/grilla-personajes';

/**
 * Esta es la pagina de favoritos. Aquí se deberán ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos: React.FC = () => {
  const [favoritos, setFavoritos] = useState<number[]>([]); // Array de IDs de personajes favoritos

  const handleEliminarTodos = () => {
    // Lógica para eliminar todos los favoritos
    setFavoritos([]);
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={handleEliminarTodos}>
          Eliminar Todos
        </button>
      </div>
      <GrillaPersonajes />
    </div>
  );
};

export default PaginaFavoritos;
