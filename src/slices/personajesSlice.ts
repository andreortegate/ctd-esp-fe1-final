// personajesSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";
import { obtenerTodosPersonajesThunk } from './thunks';

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
      .addCase(obtenerTodosPersonajesThunk.rejected, (state, action: PayloadAction<unknown>) => {
        state.status = "FAILED";
        state.errorMessage = action.payload as string;
      });
  },
});

const characterReducer = personajesSlice.reducer;
export const characterActions = personajesSlice.actions;
export default characterReducer;
