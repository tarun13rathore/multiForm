// store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../services/feature/FormSlice";
import step1Reducer from "../services/feature/Step1Slice";
import step2Reducer from "../services/feature/Step2Slice";

const store = configureStore({
  reducer: {
    form: formReducer,
    step1: step1Reducer,
    step2: step2Reducer,
  },
});

export default store;
