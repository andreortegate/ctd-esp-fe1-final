import React from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

interface TarjetaPersonajeProps {
  nombre: string;
  imagenSrc: string;
  esFavorito: boolean;
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ nombre, imagenSrc, esFavorito }) => {
  return (
    <div className="tarjeta-personaje">
      <img src={imagenSrc} alt={nombre} />
      <div className="tarjeta-personaje-body">
        <span>{nombre}</span>
        <BotonFavorito esFavorito={false} onClick={() => { /* Tu lógica de manejo de clic aquí */ }} />

      </div>
    </div>
  );
}

export default TarjetaPersonaje;
