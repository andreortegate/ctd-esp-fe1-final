import React from 'react';
import './boton-favorito.css';

interface BotonFavoritoProps {
  esFavorito: boolean;
  onClick: () => void;
}

const BotonFavorito = ({ esFavorito, onClick }: BotonFavoritoProps) => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
