// tarjeta-personaje.tsx
import React from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useDispatch } from 'react-redux';
import { toggleFavorito } from '../../reducers/personajesFavoritoReducer';

interface TarjetaPersonajeProps {
  id: number;
  nombre: string;
  imagenSrc: string;
  esFavorito: boolean;
}

const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ id, nombre, imagenSrc, esFavorito }) => {
  const dispatch = useDispatch();

  const handleFavoritoClick = () => {
    dispatch(toggleFavorito({ id, nombre, imagenSrc, esFavorito: !esFavorito }));
        console.log('Personaje marcado como favorito:', id, nombre);

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
