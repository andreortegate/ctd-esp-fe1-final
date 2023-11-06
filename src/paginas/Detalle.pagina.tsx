import React from 'react';
<<<<<<< HEAD
import './Detalle.css';
import BotonFavorito from '../componentes/botones/boton-favorito.componente';
import TarjetaEpisodio from '../componentes/episodios/tarjeta-episodio.componente';

/**
 * Esta es la pagina de detalle. Aquí se puede mostrar la vista sobre el personaje seleccionado junto con la lista de
 * episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle: React.FC = () => {
  return (
    <div className="container">
      <h3>Rick Sanchez</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" />
          <div className={"detalle-header-texto"}>
            <p>Rick Sanchez</p>
            <p>Planeta: Earth</p>
            <p>Genero: Male</p>
          </div>
          <BotonFavorito esFavorito={false} onClick={() => { /* Tu lógica de manejo de clic aquí */ }} />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        <TarjetaEpisodio nombreEpisodio="NombreEpisodio1" numeroEpisodio="1" fechaLanzamiento="FechaLanzamiento1" />
        <TarjetaEpisodio nombreEpisodio="NombreEpisodio2" numeroEpisodio="2" fechaLanzamiento="FechaLanzamiento2" />
        <TarjetaEpisodio nombreEpisodio="NombreEpisodio3" numeroEpisodio="3" fechaLanzamiento="FechaLanzamiento3" />
      </div>
    </div>
  );
=======
import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";

const PaginaDetalle = () => {
    return (
        <div className="container">
            <h3>Rick Sanchez</h3>
            <div className={"detalle"}>
                <div className={"detalle-header"}>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez"/>
                    <div className={"detalle-header-texto"}>
                        <p>Rick Sanchez</p>
                        <p>Planeta: Earth</p>
                        <p>Genero: Male</p>
                    </div>
                    <BotonFavorito esFavorito={false} onClick={() => {}} />
                    {/* Asegúrate de proporcionar una función onClick para el BotonFavorito */}
                </div>
            </div>
            <h4>Lista de episodios donde apareció el personaje</h4>
            <div className={"episodios-grilla"}>
                <TarjetaEpisodio nombre="Episodio 1" numeroEpisodio="1" fechaLanzamiento="2023-09-25" />
                <TarjetaEpisodio nombre="Episodio 2" numeroEpisodio="2" fechaLanzamiento="2023-09-26" />
                <TarjetaEpisodio nombre="Episodio 3" numeroEpisodio="3" fechaLanzamiento="2023-09-27" />
                {/* Proporciona las props requeridas a TarjetaEpisodio */}
            </div>
        </div>
    );
>>>>>>> 19d147378d6ad178f56081f04beb00e6ae1bec63
}

export default PaginaDetalle;
