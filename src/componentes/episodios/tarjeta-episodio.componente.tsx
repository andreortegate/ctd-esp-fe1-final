import React from 'react';
import './tarjeta-episodio.css';

interface TarjetaEpisodioProps {
  nombre: string;
  numeroEpisodio: string;
  fechaLanzamiento: string;
}

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

export default TarjetaEpisodio;
