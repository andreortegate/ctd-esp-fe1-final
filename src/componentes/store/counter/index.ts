import { configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer :{
  
    }
  })

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;