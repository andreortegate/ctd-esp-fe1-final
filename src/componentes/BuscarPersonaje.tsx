// components/BuscarPersonaje.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buscarPersonajes } from './redux/actions/personajes';
import { Personaje } from '../componentes/redux/types'; // Importa el tipo de Personaje
import { RootState } from '..';


function BuscarPersonaje() {
  const dispatch = useDispatch();
  const personajes: Personaje[] = useSelector(
    (state: RootState) => state.personajes.personajes
  );

  const [nombre, setNombre] = useState('');

  const handleBuscar = () => {
    dispatch(buscarPersonajes(nombre));
  };

  return (
    <div>
      <h2>Buscar Personaje</h2>
      <input
        type="text"
        placeholder="Nombre del personaje"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={handleBuscar}>Buscar</button>
      <div>
        {personajes.map((personaje) => (
          <div key={personaje.id}>
            <img src={personaje.image} alt={personaje.name} />
            <p>{personaje.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuscarPersonaje;
