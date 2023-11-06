import personajesReducer from "../reducers/personajesReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    personajes: personajesReducer
    //agregar el reducer de personajesFavoritos
  }
});

//Hooks
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
