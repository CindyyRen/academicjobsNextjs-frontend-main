import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './apiSlice';
import postsReducer from './postsSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
setupListeners(store.dispatch)