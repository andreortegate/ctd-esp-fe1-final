// personajesActions.ts

// Acción para solicitar personajes a la API
export const FETCH_PERSONAJES_REQUEST = "FETCH_PERSONAJES_REQUEST";
export const FETCH_PERSONAJES_SUCCESS = "FETCH_PERSONAJES_SUCCESS";
export const FETCH_PERSONAJES_FAILURE = "FETCH_PERSONAJES_FAILURE";

// Acción para marcar o desmarcar un personaje como favorito
export const TOGGLE_FAVORITO = "TOGGLE_FAVORITO";

// Acción para establecer un filtro de búsqueda
export const SET_FILTRO = "SET_FILTRO";

// Acción para limpiar el filtro de búsqueda
export const LIMPIAR_FILTRO = "LIMPIAR_FILTRO";

export const fetchPersonajesRequest = () => ({
  type: FETCH_PERSONAJES_REQUEST,
});

export const fetchPersonajesSuccess = (personajes: any) => ({
  type: FETCH_PERSONAJES_SUCCESS,
  payload: personajes,
});

export const fetchPersonajesFailure = (error: any) => ({
  type: FETCH_PERSONAJES_FAILURE,
  payload: error,
});

export const toggleFavorito = (id: number) => ({
  type: TOGGLE_FAVORITO,
  payload: id,
});

export const setFiltro = (filtro: any) => ({
  type: SET_FILTRO,
  payload: filtro,
});

export const limpiarFiltro = () => ({
  type: LIMPIAR_FILTRO,
});
