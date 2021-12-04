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
import inboxReducer from "./reducers/inbox";
import { devLog } from "../dev/log";

const reducers = combineReducers({
  accountLog: accountLogReducer,
  inbox: inboxReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET,
      onError: function (error) {
        devLog("Encryption Error:", error);
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
  devTools: process.env.NODE_ENV !== "production",
});
