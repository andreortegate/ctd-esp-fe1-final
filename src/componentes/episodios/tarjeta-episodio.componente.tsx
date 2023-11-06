import React from 'react';
import './tarjeta-episodio.css';

interface TarjetaEpisodioProps {
  nombreEpisodio: string;
  numeroEpisodio: string;
  fechaLanzamiento: string;
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio: React.FC<TarjetaEpisodioProps> = ({ nombreEpisodio, numeroEpisodio, fechaLanzamiento }) => {
  return (
    <div className="tarjeta-episodio">
      <h4>{nombreEpisodio}</h4>
      <div>
        <span>{`S${numeroEpisodio}`}</span>
        <span>{`Lanzado el: ${fechaLanzamiento}`}</span>
      </div>
    </div>
  );
}

export default TarjetaEpisodio;
