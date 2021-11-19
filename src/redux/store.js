import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import accountLogReducer from "./reducers/accountLog";
import { encryptTransform } from "redux-persist-transform-encrypt";

const reducers = combineReducers({
  accountLog: accountLogReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET,
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
