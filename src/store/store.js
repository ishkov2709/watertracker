import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { waterDataReducer } from './waterData/waterDataSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const rootReducer = combineReducers({
  auth: persistReducer(rootPersistConfig, authReducer),
  waterData: waterDataReducer,
});

const persistedReducer = rootReducer;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export let persistor = persistStore(store);
