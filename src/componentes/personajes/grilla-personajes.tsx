import React from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje';

/**
 * Grilla de personajes para la página de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes: React.FC = () => {
  return (
    <div className="grilla-personajes">
      <TarjetaPersonaje nombre="Rick Sanchez" imagenSrc="https://rickandmortyapi.com/api/character/avatar/1.jpeg" esFavorito={false} />
      <TarjetaPersonaje nombre="Morty Smith" imagenSrc="https://rickandmortyapi.com/api/character/avatar/2.jpeg" esFavorito={true} />
      <TarjetaPersonaje nombre="Summer Smith" imagenSrc="https://rickandmortyapi.com/api/character/avatar/3.jpeg" esFavorito={false} />
    </div>
  );
}

export default GrillaPersonajes;
