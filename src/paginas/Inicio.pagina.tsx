// PaginaInicio.tsx
import React, { useState, useEffect  } from 'react';
import Filtros from '../componentes/personajes/filtros.componente';
import GrillaPersonajes from '../componentes/personajes/grilla-personajes';
import Paginacion from '../componentes/paginacion/paginacion.componente';
import { useDispatch, useSelector } from 'react-redux';
import { limpiarFiltros, setPaginaActual, setTotalPaginas  } from '../slices/personajesSlice';
import store, { useAppSelector } from '../store/store';
import { obtenerTodosPersonajesThunk } from '../slices/thunks';

const PaginaInicio: React.FC = () => {
  const dispatch = useDispatch();
  const filtroNombre = useSelector((state: any) => state.personajes.filtroNombre);
  const { paginaActual, totalPaginas } = useAppSelector((state: any) => state.personajes);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        // Aquí realiza el llamado a obtenerTodosPersonajesThunk con la nueva página
        // y actualiza el estado con la información obtenida.
        // Puedes acceder a `paginaActual` y `totalPaginas` directamente.
        store.dispatch(obtenerTodosPersonajesThunk({ page: paginaActual, limit: 20 }));
        // Realiza cualquier otra acción necesaria después de obtener los personajes.
      } catch (error) {
        // Manejo de errores si es necesario.
      }
    };
  
    obtenerPersonajes();
  }, [paginaActual, totalPaginas, dispatch]);

  const handleAnteriorClick = () => {
    // Lógica para la acción anterior
    if (paginaActual > 1) {
      dispatch(setPaginaActual(paginaActual - 1));
      console.log("Botón Anterior clickeado");

    }
  };

  const handleSiguienteClick = () => {
    // Lógica para la acción siguiente
    if (paginaActual < totalPaginas) {
      dispatch(setPaginaActual(paginaActual + 1));
      console.log("Botón Siguiente clickeado");

    }
  };

  const limpiarFiltrosClick = () => {
    dispatch(limpiarFiltros());
    console.log("Limpiar");
    dispatch(setPaginaActual(1)); // Establecer la página actual a 1 al limpiar
    console.log("Limpiar pag actual");

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
        anteriorDisabled={paginaActual === 1}
        siguienteDisabled={paginaActual === totalPaginas}
      />
      <GrillaPersonajes />
    </div>
  );
}

export default PaginaInicio;
