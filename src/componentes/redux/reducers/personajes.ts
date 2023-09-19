
import { Personaje } from './../types'; // Define el tipo Personaje según tus necesidades

interface PersonajesState {
  personajes: Personaje[];
}

const initialState: PersonajesState = {
  personajes: [],
};

const personajesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_PERSONAJES':
      return { ...state, personajes: action.payload };
    default:
      return state;
  }
};

export default personajesReducer;
