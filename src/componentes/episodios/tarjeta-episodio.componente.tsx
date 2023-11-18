import React from 'react';
import './tarjeta-episodio.css';

interface TarjetaEpisodioProps {
<<<<<<< HEAD
  nombreEpisodio: string;
=======
  nombre: string;
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63
  numeroEpisodio: string;
  fechaLanzamiento: string;
}

<<<<<<< HEAD
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
=======
const TarjetaEpisodio = (props: TarjetaEpisodioProps) => {
  const { nombre, numeroEpisodio, fechaLanzamiento } = props;

  return (
    <div className="tarjeta-episodio">
      <h4>{nombre}</h4>
      <div>
        <span>{numeroEpisodio}</span>
        <span>Lanzado el: {fechaLanzamiento}</span>
      </div>
    </div>
  );
};
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63

export default TarjetaEpisodio;
