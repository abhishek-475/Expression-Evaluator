import { configureStore } from "@reduxjs/toolkit";
import expressionSlice from "./expressionSlice";

const store = configureStore({
  reducer: {
    expressionReducer: expressionSlice,
  },
});

export default store;
