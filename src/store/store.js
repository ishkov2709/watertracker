import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user/userSlice';
import { waterDataReducer } from './waterData/waterDataSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const userConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const waterDataConfig = {
  key: 'waterData',
  storage,
  whitelist: [],
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const rootReducer = combineReducers({
  user: persistReducer(userConfig, userReducer),
  waterData: persistReducer(waterDataConfig, waterDataReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export let persistor = persistStore(store);
