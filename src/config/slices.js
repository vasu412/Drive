import { createSlice } from "@reduxjs/toolkit";

const states = createSlice({
  name: "states",
  initialState: {
    stateVal: [],
  },
  reducers: {
    addState: (state, action) => {
      state.stateVal = action.payload;
      return state;
    },
  },
});

export const profile = createSlice({
  name: "profile",
  initialState: {
    profileVal: {},
  },
  reducers: {
    addProfile: (state, action) => {
      state.profileVal = action.payload;
    },
  },
});

export const { addState } = states.actions;
export const { addProfile } = profile.actions;

export default states.reducer;
