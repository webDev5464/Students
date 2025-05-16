import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AuthSlice } from "./Slices/Authentication.Slices";

export const Store = configureStore({
  reducer: persistReducer({ key: "root", storage }, combineReducers({
    //! changes to be done :
    AuthData : AuthSlice
   
  })),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const StorePersister = persistStore(Store);