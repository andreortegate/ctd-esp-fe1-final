import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import characterReducer from '../slices/personajesSlice';
import favoritosReducer from '../reducers/personajesFavoritoReducer';


const store = configureStore({
  reducer: {
    personajes: characterReducer,
    //agregar el reducer de personajesFavoritos
    favoritos: favoritosReducer, // Agrega el reducer de personajesFavoritos

  }
});

//Hooks
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
