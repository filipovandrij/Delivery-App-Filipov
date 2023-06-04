import { combineReducers, configureStore } from '@reduxjs/toolkit';
import shopReducer from './reducers/shopSlice';
import cartReducer from './reducers/cartSlice';

const rootReducer = combineReducers({ shopReducer, cartReducer });

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
