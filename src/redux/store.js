// Import the necessary functions from Redux
import {legacy_createStore} from 'redux';
import rootReducer from './reducer'; // Assuming you have a root reducer file
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

// Create the persist reducer
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = legacy_createStore(persistedReducer);
export const persistor = persistStore(store);
