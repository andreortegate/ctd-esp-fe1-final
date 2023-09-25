// favoritosReducer.ts

import { TOGGLE_FAVORITO } from "../actions/favoritosActions";

const initialState = {
  favoritos: [], // Almacena la lista de personajes favoritos
};

const favoritosReducer = (state = initialState, action: { type: any; }) => {
  switch (action.type) {
    case TOGGLE_FAVORITO:
      // Implementa la lógica para marcar o desmarcar un personaje como favorito
    default:
      return state;
  }
};

export default favoritosReducer;
