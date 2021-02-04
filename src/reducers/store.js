import appReducer from './app.reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'app',
    storage: storage
};

const persistedReducer = persistReducer(persistConfig, appReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { persistor, store };