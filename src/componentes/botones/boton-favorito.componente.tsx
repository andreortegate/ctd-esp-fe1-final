// boton-favorito.tsx
import React from 'react';
import './boton-favorito.css';
import star from '../../imagenes/star.png';
import starFilled from '../../imagenes/star-filled.png';

interface BotonFavoritoProps {
  esFavorito: boolean;
  onClick: () => void;
}

const BotonFavorito: React.FC<BotonFavoritoProps> = ({ esFavorito, onClick }) => {
  const handleButtonClick = () => {
    onClick(); // Llamar a la función proporcionada por el padre al hacer clic en el botón
  };

  return (
    <div className="boton-favorito" onClick={handleButtonClick}>
      <img src={esFavorito ? starFilled : star} alt="favorito" />
    </div>
  );
};

export default BotonFavorito;
