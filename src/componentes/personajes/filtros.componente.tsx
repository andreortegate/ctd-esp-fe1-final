import React from 'react';
import './filtros.css';

<<<<<<< HEAD
/**
 * Componente que contiene los filtros para la búsqueda por nombre
 * 
 * @returns un JSX element 
 */
const Filtros: React.FC = () => {
=======
const Filtros = () => {
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63

export default Filtros;
