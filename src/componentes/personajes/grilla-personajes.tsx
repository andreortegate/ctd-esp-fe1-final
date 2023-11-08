// grilla-personajes.tsx
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
 // Ajusta la ruta según tu estructura de carpetas
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje';
import { obtenerTodosPersonajesThunk } from '../../slices/thunks';
import { useAppDispatch, useAppSelector } from '../../store/store';

const GrillaPersonajes: React.FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state: any) => state.personajes.characters);

  useEffect(() => {
    // Aquí está la corrección, asegúrate de usar el thunk directamente sin ejecutarlo
    dispatch(obtenerTodosPersonajesThunk()); 
  }, [dispatch]);

  return (
    <div className="grilla-personajes">
      {characters.map((personaje: any) => (
        <TarjetaPersonaje
          key={personaje.id}
          nombre={personaje.name}
          imagenSrc={personaje.image}
          esFavorito={false}
        />
      ))}
    </div>
  );
}

export default GrillaPersonajes;
