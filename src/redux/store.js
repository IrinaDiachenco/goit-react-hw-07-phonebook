//import { combineReducers } from 'redux';
import contactReducer from './contact-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactReducer),
// });

//const store = createStore(rootReducer, composeWithDevTools());

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
  logger,
];

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}

//const persistReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const pers = { store, persistor };

export default pers;