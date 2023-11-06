import React from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

interface TarjetaPersonajeProps {
  nombre: string;
  imagenSrc: string;
  esFavorito: boolean;
}

const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ nombre, imagenSrc, esFavorito }) => {
  const handleFavoritoClick = () => {
    // Tu lógica de manejo de clic aquí
  };

  return (
    <div className="tarjeta-personaje">
      <img src={imagenSrc} alt={nombre} />
      <div className="tarjeta-personaje-body">
        <span>{nombre}</span>
        <BotonFavorito esFavorito={esFavorito} onClick={handleFavoritoClick} />
      </div>
    </div>
  );
}

export default TarjetaPersonaje;
