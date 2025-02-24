import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// This structure is neater, as we don't need to specify action types.
// This way, we don't make some typo errors.

// Plus, normally we don't mutate the data. But here it's OK!
// Redux Toolkit is handling it in an immutable manner behind the scenes.

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
