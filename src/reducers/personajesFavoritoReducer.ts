import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";

export interface PersonajesFavoritoState {
  favoritos: Personaje[];
}

const initialState: PersonajesFavoritoState = {
  favoritos: []
};

const personajesFavoritoSlice = createSlice({
  name: "favoritos",
  initialState,
  reducers: {
    //aqui debes agregar la logica de añadir o quitar favoritos
    toggleFavorito: (state, action: PayloadAction<Personaje>) => {
      //
    },
    cleanFavoritos: (state) => {
      //
    }
  }
});

export const {
  toggleFavorito,
  cleanFavoritos
} = personajesFavoritoSlice.actions;

export default personajesFavoritoSlice.reducer;
