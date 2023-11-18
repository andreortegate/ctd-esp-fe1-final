<<<<<<< HEAD
import React, { useState } from 'react';
import GrillaPersonajes from '../componentes/personajes/grilla-personajes';

/**
 * Esta es la pagina de favoritos. Aquí se deberán ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos: React.FC = () => {
  const [favoritos, setFavoritos] = useState<number[]>([]); // Array de IDs de personajes favoritos

  const handleEliminarTodos = () => {
    // Lógica para eliminar todos los favoritos
    setFavoritos([]);
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={handleEliminarTodos}>
          Eliminar Todos
        </button>
      </div>
      <GrillaPersonajes />
    </div>
  );
};
=======
import React from 'react';
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useSelector } from 'react-redux'; // Importa useSelector para acceder al estado de Redux
import { AppState } from '../store/types'; // Importa el tipo de estado de tu aplicación


const PaginaFavoritos = () => {
    // Obtén la lista de personajes favoritos desde el estado de Redux
    const favoritos = useSelector((state: AppState) => state.favoritos.favoritos);

    return (
        <div className="container">
            <div className="actions">
                <h3>Personajes Favoritos</h3>
                <button className="danger">Test Button</button>
            </div>
            {/* Pasa la lista de personajes favoritos como prop al componente GrillaPersonajes */}
            <GrillaPersonajes personajes={favoritos} />
        </div>
    );
}
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63

export default PaginaFavoritos;
