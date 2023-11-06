// grilla-personajes.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './grilla-personajes.css';
import { obtenerTodosPersonajesThunk } from '../../slices/personajesSlice'; // Ajusta la ruta según tu estructura de carpetas
import TarjetaPersonaje from './tarjeta-personaje';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const GrillaPersonajes: React.FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state: any) => state.personajes.characters);

  useEffect(() => {
    // Aquí está la corrección, asegúrate de usar el thunk directamente sin ejecutarlo
    dispatch(obtenerTodosPersonajesThunk()); 
  }, [dispatch]);

  return (
    <div className="grilla-personajes">
      {characters.map((personaje: any) => (
        <TarjetaPersonaje
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
