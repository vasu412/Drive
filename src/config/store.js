import { configureStore } from "@reduxjs/toolkit";
import statesReducer, { option, profile, search, simpleState } from "./slices";

const store = configureStore({
  reducer: {
    states: statesReducer,
    profile: profile.reducer,
    option: option.reducer,
    simpleState: simpleState.reducer,
    search: search.reducer,
  },
});

export default store;
