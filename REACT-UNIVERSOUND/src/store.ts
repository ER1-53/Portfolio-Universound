// store.ts
import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './musicSlice';

const store = configureStore({
  reducer: {
    music: musicReducer,
    // Ajoutez d'autres réducteurs ici au besoin
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
