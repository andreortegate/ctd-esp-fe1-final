// grilla-personajes.tsx
import React, { useEffect } from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje';
import { obtenerTodosPersonajesThunk } from '../../slices/thunks';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setTotalPaginas, updateEsFavorito } from '../../slices/personajesSlice';
import { FavoritoPayload } from '../../reducers/personajesFavoritoReducer';

export interface GrillaPersonajesProps {
  esFavorito: boolean;
  personajes: FavoritoPayload[];
}

const GrillaPersonajes: React.FC<GrillaPersonajesProps> = ({ esFavorito, personajes }) => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state: any) => state.personajes.characters);
  const filtroNombre = useAppSelector((state: any) => state.personajes.filtroNombre);

  const handleToggleFavorito = (id: number, esFavorito: boolean) => {
    dispatch(updateEsFavorito({ id, esFavorito }));
    console.log(`que carajos: ${esFavorito ? 'Sí' : 'No'}`, characters.find((p: any) => p.id === id)?.name);
  };

  const { paginaActual, totalPaginas } = useAppSelector((state: any) => state.personajes);

  useEffect(() => {
    dispatch(obtenerTodosPersonajesThunk(paginaActual));
  }, [dispatch, paginaActual]);

  useEffect(() => {
    dispatch(setTotalPaginas(totalPaginas));
  }, [dispatch, totalPaginas]);

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
          esFavorito={personajes.some((p: any) => p.id === personaje.id && p.esFavorito)}
        />
      ))}
    </div>
  );
}

export default GrillaPersonajes;
