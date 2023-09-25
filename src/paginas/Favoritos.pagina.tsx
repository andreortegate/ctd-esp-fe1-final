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

export default PaginaFavoritos;
