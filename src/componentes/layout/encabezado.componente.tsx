import React from 'react';
import { Link } from 'react-router-dom';
import './encabezado.css';

<<<<<<< HEAD
/**
 * Encabezado que contiene los links para navegar entre las páginas
 *
 * Uso: `<Encabezado />`
 *
 * @returns {JSX.Element}
 */
const Encabezado: React.FC = () => {
=======
const Encabezado = () => {
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63
  return (
    <header>
      <div>
        <div>
          <h2>Examen Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
<<<<<<< HEAD
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
            <li><Link to="/detalle">Detalle</Link></li>
=======
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalle">Detalle</Link>
            </li>
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63
          </ul>
        </nav>
      </div>
    </header>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63

export default Encabezado;
