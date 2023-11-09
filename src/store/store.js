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
};

const userConfig = {
  key: 'user',
  storage,
};

const waterDataConfig = {
  key: 'waterData',
  storage,
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const rootReducer = combineReducers({
  auth: persistReducer(userConfig, userReducer),
  films: persistReducer(waterDataConfig, waterDataReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export let persistor = persistStore(store);
