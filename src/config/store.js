import { configureStore } from "@reduxjs/toolkit";
import statesReducer, { option, profile } from "./slices";

const store = configureStore({
  reducer: {
    states: statesReducer,
    profile: profile.reducer,
    option: option.reducer,
  },
});

export default store;
