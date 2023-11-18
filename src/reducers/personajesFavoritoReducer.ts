// favoritosSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";

export interface FavoritoPayload {
  id: number;
  nombre: string;
  imagenSrc: string;
  esFavorito: boolean;
}

export interface PersonajesFavoritoState {
  favoritos: FavoritoPayload[];
}

const initialState: PersonajesFavoritoState = {
  favoritos: []
};

const personajesFavoritoSlice = createSlice({
  name: "favoritos",
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<FavoritoPayload>) => {
      const { id } = action.payload;

      const index = state.favoritos.findIndex((personaje) => personaje.id === id);

      if (index !== -1) {
        // Si el personaje ya está en favoritos, lo quitamos
        state.favoritos.splice(index, 1);
      } else {
        // Si el personaje no está en favoritos, lo añadimos
        state.favoritos.push(action.payload);
      }
    },
    cleanFavoritos: (state) => {
      state.favoritos = [];
    }
  }
});

export const {
  toggleFavorito,
  cleanFavoritos
} = personajesFavoritoSlice.actions;

export default personajesFavoritoSlice.reducer;
