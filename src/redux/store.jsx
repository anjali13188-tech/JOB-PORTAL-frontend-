import authSlice from "./authSlice"
import jobSlice from "./jobSlice"
import companiesSlice from "./companiesSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// redux-persist
import {
      persistReducer,
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



// persit config
const persistConfig = {
      key: 'root',
      version: 1,
      storage,
}


// root reducer
const rootReducer = combineReducers({
      auth: authSlice,
      job: jobSlice,
      company: companiesSlice
})

// persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// configure store
const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  serializableCheck: {
                        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                  },
            }),
})


export default store




