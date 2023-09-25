import React, { useState } from 'react';
import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useSelector } from 'react-redux'; // Importa useSelector para acceder al estado de Redux
import { AppState } from '../store/types';// Importa el tipo de estado de tu aplicación

const PaginaInicio = () => {
    const [filtro, setFiltro] = useState(''); // Estado local para el filtro
    const personajes = useSelector((state: AppState) => state.personajes); // Accede al estado de personajes desde Redux

    // Filtra los personajes basados en el estado local del filtro
    const personajesFiltrados = personajes.filter((personaje) =>
      personaje.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div className="container">
            <div className="actions">
                <h3>Catálogo de Personajes</h3>
                <button className="danger" onClick={() => setFiltro('')}>Limpiar filtros</button>
            </div>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <GrillaPersonajes personajes={personajesFiltrados} />
            <Paginacion
              paginaActual={0}
              totalPaginas={0}
              onPaginaAnteriorClick={() => {}}
              onPaginaSiguienteClick={() => {}}
            />
        </div>
    );
}

export default PaginaInicio;
