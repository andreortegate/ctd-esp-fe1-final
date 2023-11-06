// personajesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { obtenerTodosPersonajesAPI } from "../services/personaje.services";
import Personaje from "../types/personaje.types";

interface PersonajesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  characters: Personaje[];
  errorMessage: string | null;
}

const initialState: PersonajesState = {
  status: "IDLE",
  characters: [],
  errorMessage: null,
};

export const obtenerTodosPersonajesThunk = createAsyncThunk(
  "personajes/obtenerTodosPersonajesAPI",
  async () => {
    try {
      const personajes: Personaje[] = await obtenerTodosPersonajesAPI();
      return personajes;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else if (error instanceof Response && error.status === 404) {
        throw "No se encontraron personajes";
      } else {
        throw "Error al obtener los personajes";
      }
    }
  }
);

const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(obtenerTodosPersonajesThunk.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(obtenerTodosPersonajesThunk.fulfilled, (state, action: PayloadAction<Personaje[]>) => {
        state.status = "COMPLETED";
        state.characters = action.payload;
      })
      .addCase(obtenerTodosPersonajesThunk.rejected, (state, action: PayloadAction<string>) => {
        state.status = "FAILED";
        state.errorMessage = action.payload;
      });
  },
});

export default personajesSlice.reducer;
export const { obtenerTodosPersonajesThunk } = personajesSlice.actions;
