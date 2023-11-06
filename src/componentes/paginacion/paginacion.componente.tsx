import React from 'react';
import './paginacion.css';

interface PaginacionProps {
<<<<<<< HEAD
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
=======
  paginaActual: number;
  totalPaginas: number;
  onPaginaAnteriorClick: () => void;
  onPaginaSiguienteClick: () => void;
}

const Paginacion = ({
  paginaActual,
  totalPaginas,
  onPaginaAnteriorClick,
  onPaginaSiguienteClick,
}: PaginacionProps) => {
  return (
    <div className="paginacion">
      <button disabled={paginaActual === 1} className={"primary"} onClick={onPaginaAnteriorClick}>
        Anterior
      </button>
      <button disabled={paginaActual === totalPaginas} className={"primary"} onClick={onPaginaSiguienteClick}>
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63
        Siguiente
      </button>
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63

export default Paginacion;
