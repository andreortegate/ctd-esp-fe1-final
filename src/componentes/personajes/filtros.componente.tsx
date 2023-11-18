// filtros.tsx
import React from 'react';
import './filtros.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFiltroNombre } from '../../slices/personajesSlice';

const Filtros: React.FC = () => {
  const dispatch = useDispatch();
  const filtroNombre = useSelector((state: any) => state.personajes.filtroNombre);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    dispatch(setFiltroNombre(query));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input 
        type="text" 
        value={filtroNombre}
        onChange={onChange}
        placeholder="Rick, Morty, Beth, Alien, ...etc" 
        name="nombre" 
        autoFocus={true} 
      />
    </div>
  );
}

export default Filtros;
