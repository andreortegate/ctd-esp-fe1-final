import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from './tarjeta-personaje.componente'; // Asegúrate de proporcionar la ruta correcta

const GrillaPersonajes = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters); // Asegúrate de usar la propiedad correcta en tu estado de Redux

  useEffect(() => {
    dispatch(fetchCharacters()); // Llama a la acción para obtener los personajes cuando el componente se monta
  }, [dispatch]);

  if (!characters) {
    return <p>Cargando personajes...</p>;
  }

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          {/* Renderiza las tarjetas de personajes aquí */}
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
};

export default GrillaPersonajes;
