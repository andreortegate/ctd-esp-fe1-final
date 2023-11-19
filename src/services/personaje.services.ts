import Personaje from "../types/personaje.types";

interface PaginacionParams {
  page: number;
  limit: number;
}

export const obtenerTodosPersonajesAPI = async (
  { page, limit }: PaginacionParams,
  nombre?: string
): Promise<{ personajes: Personaje[]; info: { pages: number } }> => {
  let params = `?page=${page}&limit=${limit}`;

  if (nombre) {
    params += `&name=${nombre}`;
  }

  return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then((data) => data.json())
    .then((data) => ({ personajes: data.results, info: data.info }));
};
