/* eslint-disable react-refresh/only-export-components */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { UserSlice } from "./user/UserSlice";
import { AdminSlice } from "./admin/AdminSlice";

const persistConfig = { key: "root", storage };

const rootReducer = combineReducers({
  UserStore: UserSlice,
  AdminStore: AdminSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const StorePersister = persistStore(Store);
export default Store;