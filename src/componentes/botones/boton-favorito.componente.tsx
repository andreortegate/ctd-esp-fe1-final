import React from 'react';
import './boton-favorito.css';
import star from '../../imagenes/star.png';
import starFilled from '../../imagenes/star-filled.png';

interface BotonFavoritoProps {
  esFavorito: boolean;
  onClick: () => void;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito: React.FC<BotonFavoritoProps> = ({ esFavorito, onClick }) => {
  //const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
  const src = esFavorito ? starFilled : star;

  return (
    <div className="boton-favorito" onClick={onClick}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;


