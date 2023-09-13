// charactersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data.results;
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        return action.payload; // Actualiza el estado con los personajes obtenidos
      });
  },
});

export default charactersSlice.reducer;
