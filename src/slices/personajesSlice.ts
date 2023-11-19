// personajesSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";
import { obtenerTodosPersonajesThunk } from './thunks';

interface PersonajesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  characters: Personaje[];
  errorMessage: string | null;
  filtroNombre: string; 
  esFavorito: boolean; // Nueva propiedad
  paginaActual: number;
  totalPaginas: number;

}

const initialState: PersonajesState = {
  status: "IDLE",
  characters: [],
  errorMessage: null,
  filtroNombre: '', // Valor inicial del filtro
  esFavorito: false, // Valor inicial del estado de favorito
  paginaActual: 1,
  totalPaginas: 1,
};


const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    setFiltroNombre: (state, action: PayloadAction<string>) => {
      state.filtroNombre = action.payload;
    },
    limpiarFiltros: (state) => {
      state.filtroNombre = '';
    },
    setEsFavorito: (state, action: PayloadAction<boolean>) => {
      state.esFavorito = action.payload;
    },
    setPaginaActual: (state, action: PayloadAction<number>) => {
      state.paginaActual = action.payload;
    },
    setTotalPaginas: (state, action: PayloadAction<number>) => {
      state.totalPaginas = action.payload;
    },
    // Nueva acción para actualizar la propiedad esFavorito de un personaje
    updateEsFavorito: (state, action: PayloadAction<{ id: number; esFavorito: boolean }>) => {
      const { id, esFavorito } = action.payload;
      state.characters = state.characters.map((personaje) => ({
        ...personaje,
        esFavorito: personaje.id === id ? esFavorito : personaje.esFavorito,
      }));
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(obtenerTodosPersonajesThunk.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(obtenerTodosPersonajesThunk.fulfilled, (state, action: PayloadAction<Personaje[]>) => {
        state.status = "COMPLETED";
        state.characters = action.payload.map((personaje) => ({
          ...personaje,
          esFavorito: false, // Inicialmente, ninguno es favorito
        }));
      })
      .addCase(obtenerTodosPersonajesThunk.rejected, (state, action: PayloadAction<unknown>) => {
        state.status = "FAILED";
        state.errorMessage = action.payload as string;
      });
  },
});

const characterReducer = personajesSlice.reducer;
export const { setFiltroNombre, limpiarFiltros, setEsFavorito, setPaginaActual, setTotalPaginas, updateEsFavorito } = personajesSlice.actions;
export const characterActions = personajesSlice.actions;
export default characterReducer;


