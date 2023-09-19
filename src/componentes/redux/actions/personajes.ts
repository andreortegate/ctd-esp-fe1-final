import { Dispatch } from 'redux';
import { Personaje } from '../types';



export const setPersonajes = (personajes: Personaje[]) => ({
  type: 'SET_PERSONAJES',
  payload: personajes,
});

export const buscarPersonajes = (nombre: string) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nombre}`
    );

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    dispatch(setPersonajes(data.results));
  } catch (error) {
    console.error('Error al buscar personajes', error);
  }
};
