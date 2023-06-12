import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todos/todoSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({ reducer: persistedReducer })

export const persistor = persistStore(store)
