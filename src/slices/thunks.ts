import { createAsyncThunk } from '@reduxjs/toolkit';
import Personaje from '../types/personaje.types';
import { obtenerTodosPersonajesAPI } from '../services/personaje.services';



export const obtenerTodosPersonajesThunk = createAsyncThunk(
  "personajes/obtenerTodosPersonajesAPI",
  async () => {
    try {
      const personajes: Personaje[] = await obtenerTodosPersonajesAPI();
      console.log(personajes);
      return personajes;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else if (error instanceof Response && error.status === 404) {
        throw new Error("No se encontraron personajes");
      } else {
        throw new Error("Error desconocido");
      }
    }
  }
);