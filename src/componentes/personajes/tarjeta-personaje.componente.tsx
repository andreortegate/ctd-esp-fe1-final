import React from 'react';
import { useDispatch } from 'react-redux';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { toggleFavorito } from '../../store/actions/favoritosActions';

interface TarjetaPersonajeProps {
  nombre: string;
  imagenUrl: string;
  esFavorito: boolean;
  id: number;
  especie: string;
}

const TarjetaPersonaje = (props: TarjetaPersonajeProps) => {
  const { nombre, imagenUrl, esFavorito, id } = props;
  const dispatch = useDispatch();

  const handleFavoritoClick = () => {
    dispatch(toggleFavorito(id));
  };

  return (
    <div className="tarjeta-personaje">
      <img src={imagenUrl} alt={nombre} />
      <div className="tarjeta-personaje-body">
        <span>{nombre}</span>
        <BotonFavorito esFavorito={esFavorito} onClick={handleFavoritoClick} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
