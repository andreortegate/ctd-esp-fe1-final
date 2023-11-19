// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import characterReducer from '../slices/personajesSlice';
import favoritosReducer from '../reducers/personajesFavoritoReducer';

const store = configureStore({
  reducer: {
    personajes: characterReducer,
    favoritos: favoritosReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
