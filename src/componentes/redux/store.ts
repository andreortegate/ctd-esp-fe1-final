// redux/store.ts
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Middleware para acciones asincrónicas
import rootReducer from '../redux/reducers/personajes'; // Aún no creado

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
