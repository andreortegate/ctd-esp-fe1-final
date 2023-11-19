// tarjeta-personaje.tsx
import React, { useState } from 'react';
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
  const [favoritoLocal, setFavoritoLocal] = useState(esFavorito);

  const handleFavoritoClick = () => {
    setFavoritoLocal(!favoritoLocal);
    dispatch(toggleFavorito({ id, nombre, imagenSrc, esFavorito: !favoritoLocal }));
    console.log('Es favorito:', id, nombre);
  };

  return (
    <div className="tarjeta-personaje">
      <img src={imagenSrc} alt={nombre} />
      <div className="tarjeta-personaje-body">
        <span>{nombre}</span>
        <BotonFavorito esFavorito={favoritoLocal} onClick={handleFavoritoClick} />
      </div>
    </div>
  );
}

export default TarjetaPersonaje;
