// personajesSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";
import { obtenerTodosPersonajesThunk } from './thunks';

interface PersonajesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  characters: Personaje[];
  errorMessage: string | null;
  filtroNombre: string; 
}

const initialState: PersonajesState = {
  status: "IDLE",
  characters: [],
  errorMessage: null,
  filtroNombre: '', // Valor inicial del filtro
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(obtenerTodosPersonajesThunk.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(obtenerTodosPersonajesThunk.fulfilled, (state, action: PayloadAction<Personaje[]>) => {
        state.status = "COMPLETED";
        state.characters = action.payload;
      })
      .addCase(obtenerTodosPersonajesThunk.rejected, (state, action: PayloadAction<unknown>) => {
        state.status = "FAILED";
        state.errorMessage = action.payload as string;
      });
  },
});

const characterReducer = personajesSlice.reducer;
export const { setFiltroNombre, limpiarFiltros } = personajesSlice.actions;
export const characterActions = personajesSlice.actions;
export default characterReducer;
