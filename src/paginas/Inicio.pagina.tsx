// PaginaInicio.tsx
import React, { useState } from 'react';
import Filtros from '../componentes/personajes/filtros.componente';
import GrillaPersonajes from '../componentes/personajes/grilla-personajes';
import Paginacion from '../componentes/paginacion/paginacion.componente';
import { useDispatch, useSelector } from 'react-redux';
import { limpiarFiltros } from '../slices/personajesSlice';

const PaginaInicio: React.FC = () => {
  const dispatch = useDispatch();
  const filtroNombre = useSelector((state: any) => state.personajes.filtroNombre);

  const handleAnteriorClick = () => {
    // Lógica para la acción anterior
  };

  const handleSiguienteClick = () => {
    // Lógica para la acción siguiente
  };

  const limpiarFiltrosClick = () => {
    dispatch(limpiarFiltros());
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={limpiarFiltrosClick}>Limpiar</button>
      </div>
      <Filtros />
      <Paginacion
        onAnteriorClick={handleAnteriorClick}
        onSiguienteClick={handleSiguienteClick}
        anteriorDisabled={false} // Ajusta según tu lógica
        siguienteDisabled={false} // Ajusta según tu lógica
      />
      <GrillaPersonajes />
    </div>
  );
}

export default PaginaInicio;
