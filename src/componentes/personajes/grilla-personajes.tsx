// grilla-personajes.tsx
import React, { useEffect } from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje';
import { obtenerTodosPersonajesThunk } from '../../slices/thunks';
import { useAppDispatch, useAppSelector } from '../../store/store';

const GrillaPersonajes: React.FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state: any) => state.personajes.characters);
  const filtroNombre = useAppSelector((state: any) => state.personajes.filtroNombre);

  useEffect(() => {
    dispatch(obtenerTodosPersonajesThunk());
  }, [dispatch]);

  const filteredCharacters = characters.filter(
    (personaje: any) => personaje.name.toLowerCase().includes(filtroNombre.toLowerCase())
  );

  if (!filteredCharacters || filteredCharacters.length === 0) return <></>;

  return (
    <div className="grilla-personajes">
      {filteredCharacters.map((personaje: any) => (
        <TarjetaPersonaje
        id={personaje.number}
          key={personaje.id}
          nombre={personaje.name}
          imagenSrc={personaje.image}
          esFavorito={false}
        />
      ))}
    </div>
  );
}

export default GrillaPersonajes;
