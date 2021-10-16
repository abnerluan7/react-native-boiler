/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { StoreProps } from './types/features/arc';

export const createStore = ({ reducers, middlewares }: StoreProps) =>
  configureStore({
    reducer: {
      ...reducers,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(...middlewares),
  });
