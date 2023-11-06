import React from 'react';
import Filtros from '../componentes/personajes/filtros.componente';
import GrillaPersonajes from '../componentes/personajes/grilla-personajes';
import Paginacion from '../componentes/paginacion/paginacion.componente';

/**
 * Esta es la pagina principal. Aquí se deberá ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio: React.FC = () => {
  // Funciones de ejemplo para onAnteriorClick y onSiguienteClick
  const handleAnteriorClick = () => {
    // Lógica para la acción anterior
  };

  const handleSiguienteClick = () => {
    // Lógica para la acción siguiente
  };

  // Ejemplo de datos de favoritos, ajusta según tu lógica
  const favoritos = [1, 2, 3];

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger">Limpiar</button>
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
