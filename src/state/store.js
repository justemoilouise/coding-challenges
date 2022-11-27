import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from './drawer-reducer';

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});
