import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Reducer
} from "@reduxjs/toolkit";
import { obtenerTodosPersonajesAPI } from "../services/personaje.services";
import Personaje from "../types/personaje.types";
import { setFiltroNombre } from '../slices/personajesSlice';
import { useDispatch } from 'react-redux';

export interface PersonajesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  characters: Personaje[];
  errorMessage: string | null;
  filtroNombre: string;
}

const initialState: PersonajesState = {
  status: "IDLE",
  characters: [],
  errorMessage: null,
  filtroNombre: '',
};

export const fetchCharactersThunk = createAsyncThunk(
  "personajes/fetchThunk",
  async (query: string) => {
    try {
      const { personajes } = await obtenerTodosPersonajesAPI({ page: 1, limit: 20 }, query);
      return personajes;
    } catch (e) {
      return e;
    }
  }
);

const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersThunk.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(
        fetchCharactersThunk.fulfilled,
        (state, action: PayloadAction<Personaje[] | any>) => {
          state.status = "COMPLETED";
          // Ahora extraes los personajes del objeto que devuelve la API
          state.characters = action.payload;
        }
      )
      .addCase(
        fetchCharactersThunk.rejected,
        (state, action: PayloadAction<Personaje[] | any>) => {
          state.status = "FAILED";
          state.errorMessage = action.payload;
        }
      );
  },
});

//export const { setFiltroNombre } = personajesSlice.actions;
export default personajesSlice.reducer;
