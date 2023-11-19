// thunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import Personaje from '../types/personaje.types';
import { obtenerTodosPersonajesAPI } from '../services/personaje.services';
import { RootState } from '../store/store';
import { setTotalPaginas } from './personajesSlice';

interface PaginacionParams {
  page: number;
  limit: number;
}

export const obtenerTodosPersonajesThunk = createAsyncThunk(
  "personajes/obtenerTodosPersonajesAPI",
  async ({ page, limit }: PaginacionParams, { getState, dispatch }) => {
    try {
      const nombreFiltro = (getState() as RootState).personajes.filtroNombre;
      const { personajes, info } = await obtenerTodosPersonajesAPI({ page, limit }, nombreFiltro);

      // Actualizar el estado de totalPaginas
      const totalPaginas = info.pages; // Utiliza la información de la API para obtener el total de páginas
      dispatch(setTotalPaginas(totalPaginas));

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
