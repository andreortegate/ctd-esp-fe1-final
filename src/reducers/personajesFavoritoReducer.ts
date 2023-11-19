// personajesFavoritoReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  favoritos: [],
};

const personajesFavoritoSlice = createSlice({
  name: "favoritos",
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<FavoritoPayload>) => {
      const { id, nombre, imagenSrc, esFavorito } = action.payload;

      const index = state.favoritos.findIndex((personaje) => personaje.id === id);

      if (index !== -1) {
        // Si el personaje ya está en favoritos, lo quitamos
        state.favoritos.splice(index, 1);
        console.log(`Personaje desmarcado como favorito: ${nombre}`);
      } else {
        // Si el personaje no está en favoritos, lo añadimos
        state.favoritos.push({ id, nombre, imagenSrc, esFavorito: !esFavorito });
        console.log(`Personaje marcado como favorito: ${nombre}`);
      }
    },
    cleanFavoritos: (state) => {
      state.favoritos = [];
    },
  },
});

export const { toggleFavorito, cleanFavoritos } = personajesFavoritoSlice.actions;

export default personajesFavoritoSlice.reducer;
