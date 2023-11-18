export const TOGGLE_FAVORITO = "TOGGLE_FAVORITO";

export const toggleFavorito = (id: number) => ({
  type: TOGGLE_FAVORITO,
  payload: id,
});
