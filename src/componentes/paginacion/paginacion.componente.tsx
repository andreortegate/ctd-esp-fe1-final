import React from 'react';
import './paginacion.css';

interface PaginacionProps {
  onAnteriorClick: () => void;
  onSiguienteClick: () => void;
  anteriorDisabled: boolean;
  siguienteDisabled: boolean;
}

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion: React.FC<PaginacionProps> = ({ onAnteriorClick, onSiguienteClick, anteriorDisabled, siguienteDisabled }) => {
  return (
    <div className="paginacion">
      <button disabled={anteriorDisabled} className={"primary"} onClick={onAnteriorClick}>
        Anterior
      </button>
      <button disabled={siguienteDisabled} className={"primary"} onClick={onSiguienteClick}>
        Siguiente
      </button>
    </div>
  );
}

export default Paginacion;
