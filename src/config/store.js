import { configureStore } from "@reduxjs/toolkit";
import statesReducer, { profile } from "./slices";

const store = configureStore({
  reducer: {
    states: statesReducer,
    profile: profile.reducer,
  },
});

export default store;
