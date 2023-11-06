import React from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

interface Personaje {
  nombre: string;
  especie: string;
  imagenUrl: string;
}

interface GrillaPersonajesProps {
  personajes: Personaje[];
}

const GrillaPersonajes: React.FC<GrillaPersonajesProps> = ({ personajes }) => {
  return (
    <div className="grilla-personajes">
      {personajes.map((personaje, index) => (
        <TarjetaPersonaje
          key={index}
          nombre={personaje.nombre}
          especie={personaje.especie}
          imagenUrl={personaje.imagenUrl} esFavorito={false} id={0}        />
      ))}
    </div>
  );
};

export default GrillaPersonajes;
