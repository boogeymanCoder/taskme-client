import { configureStore } from "@reduxjs/toolkit";
import accountLogReducer from "./reducers/accountLog";

export default configureStore({
  reducer: { accountLogReducer },
});
