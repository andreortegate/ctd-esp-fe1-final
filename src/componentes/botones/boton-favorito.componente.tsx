import React from 'react';
import './boton-favorito.css';

interface BotonFavoritoProps {
  esFavorito: boolean;
  onClick: () => void;
}

<<<<<<< HEAD
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito: React.FC<BotonFavoritoProps> = ({ esFavorito, onClick }) => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito" onClick={onClick}>
=======
const BotonFavorito = ({ esFavorito, onClick }: BotonFavoritoProps) => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito">
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
<<<<<<< HEAD


=======
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63
