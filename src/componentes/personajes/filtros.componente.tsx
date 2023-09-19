/*import './filtros.css';

const Filtros = () => {

    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
}

export default Filtros;*/
import React, { useState } from 'react';
import './filtros.css';

interface FiltrosProps {
  onFilterChange: (filterText: string) => void;
}

function Filtros({ onFilterChange }: FiltrosProps) {
  const [filterText, setFilterText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setFilterText(newText);
    onFilterChange(newText); // Llama a la función proporcionada con el nuevo texto de filtro
  };

  const handleClearClick = () => {
    setFilterText('');
    onFilterChange(''); // Llama a la función proporcionada con texto vacío para mostrar el estado inicial
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        value={filterText}
        onChange={handleInputChange}
      />
      <button className="danger" onClick={handleClearClick}>
        Limpiar
      </button>
    </div>
  );
}

export default Filtros;