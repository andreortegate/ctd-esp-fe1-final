/*import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

// index.tsx o App.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './componentes/redux/store'; // Importa la tienda Redux
import BuscarPersonaje from './componentes/BuscarPersonaje';
import { combineReducers } from 'redux';
import personajesReducer from './componentes/redux/reducers/personajes';

const rootReducer = combineReducers({
  personajes: personajesReducer,
  // Otros reducers aquí si los tienes
});

ReactDOM.render(
  <Provider store={store}>
    <BuscarPersonaje />
  </Provider>,
  document.getElementById('root')
);
export type RootState = ReturnType<typeof rootReducer>; // Esta línea es importante para tipar el estado correctamente

export default rootReducer;