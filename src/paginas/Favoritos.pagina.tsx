// PaginaFavoritos.tsx
import React, { useEffect } from 'react';
import GrillaPersonajes from '../componentes/personajes/grilla-personajes';
import { useAppSelector } from '../store/store';

const PaginaFavoritos: React.FC = () => {
  const favoritos = useAppSelector((state) => state.favoritos.favoritos);

  useEffect(() => {
    console.log('PaginaFavoritos se actualizó');
  }, [favoritos]);

  const handleEliminarTodos = () => {
    // Lógica para eliminar todos los favoritos
    // setFavoritos([]);
    console.log('Favoritos actuales:', favoritos);
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={handleEliminarTodos}>
          Eliminar Todos
        </button>
      </div>
      {favoritos.length > 0 ? (
        <GrillaPersonajes esFavorito={true} personajes={favoritos} />
      ) : (
        <p>No hay personajes favoritos.</p>
      )}
    </div>
  );
};

export default PaginaFavoritos;
