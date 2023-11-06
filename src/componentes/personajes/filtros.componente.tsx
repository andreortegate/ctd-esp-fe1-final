import React from 'react';
import './filtros.css';

/**
 * Componente que contiene los filtros para la búsqueda por nombre
 * 
 * @returns un JSX element 
 */
const Filtros: React.FC = () => {
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
  );
}

export default Filtros;
