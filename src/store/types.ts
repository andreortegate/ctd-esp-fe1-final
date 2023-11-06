// En redux/types.ts

// Define el tipo para los personajes
export interface Personaje {
    nombre: string;
    especie: string;
    imagenUrl: string;
  }
  
  // Define el tipo para los favoritos
  export interface Favorito {
    nombre: any;
    id: number;
    // Otras propiedades de favorito si las tienes
  }
  
  // Define el tipo de estado de la aplicación
  export interface AppState {
    personajes: Personaje[];
    favoritos: Favorito[];
  }
  