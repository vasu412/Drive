import { configureStore } from "@reduxjs/toolkit";
import statesReducer, { option, profile, simpleState } from "./slices";

const store = configureStore({
  reducer: {
    states: statesReducer,
    profile: profile.reducer,
    option: option.reducer,
    simpleState: simpleState.reducer,
  },
});

export default store;
