import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Reducer
} from "@reduxjs/toolkit";
//import { CharacterActions } from "../actions/personajesActions";
import { buscarPersonajesAPI } from "../services/personaje.services";
import Personaje from "../types/personaje.types";

export interface PersonajesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  characters: Personaje[];
  errorMessage: string | null;
}

const initialState: PersonajesState = {
  status: "IDLE",
  characters: [],
  errorMessage: null
};

export const fetchCharactersThunk = createAsyncThunk(
  "personajes/fetchThunk",
  async (query: string) => {
    try {
      const personajes: Personaje[] = await buscarPersonajesAPI(query);
      return personajes;
    } catch (e) {
      return e;
    }
  }
);

const persojeslice = createSlice({
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
  }
});

export default persojeslice.reducer;
