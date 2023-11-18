// personajesReducer.ts

import {
  FETCH_PERSONAJES_REQUEST,
  FETCH_PERSONAJES_SUCCESS,
  FETCH_PERSONAJES_FAILURE,
  TOGGLE_FAVORITO,
  SET_FILTRO,
  LIMPIAR_FILTRO,
} from "../actions/personajesActions";

const initialState = {
  personajes: [], // Aquí almacenarás la lista de personajes
  loading: false,
  error: null,
  filtro: "", // Almacena el filtro de búsqueda
};

const personajesReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case FETCH_PERSONAJES_REQUEST:
      return { ...state, loading: true };
    case FETCH_PERSONAJES_SUCCESS:
      return { ...state, loading: false, personajes: action.payload };
    case FETCH_PERSONAJES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case TOGGLE_FAVORITO:
      // Implementa la lógica para marcar o desmarcar como favorito
    case SET_FILTRO:
      return { ...state, filtro: action.payload };
    case LIMPIAR_FILTRO:
      return { ...state, filtro: "" };
    default:
      return state;
  }
};

export default personajesReducer;
