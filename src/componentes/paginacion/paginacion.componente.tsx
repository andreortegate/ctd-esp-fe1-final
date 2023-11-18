import React from 'react';
import './paginacion.css';

interface PaginacionProps {
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
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
