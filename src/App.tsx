import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PaginaInicio from './paginas/Inicio.pagina';
import PaginaFavoritos from './paginas/Favoritos.pagina';
import PaginaDetalle from './paginas/Detalle.pagina';
import Encabezado from './componentes/layout/encabezado.componente';
=======
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalle" element={<PaginaDetalle />} />
      </Routes>
    </div>
  );
}

export default App;
